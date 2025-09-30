FROM node:lts-alpine AS base
WORKDIR /app

# Install build dependencies and runtime libraries for Sharp
RUN apk add --no-cache python3 make g++ vips-dev vips

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile
RUN cd node_modules/sharp && npm install --ignore-scripts=false --foreground-scripts

FROM base AS prod-deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --prod --frozen-lockfile
RUN cd node_modules/sharp && npm install --ignore-scripts=false --foreground-scripts

FROM deps AS build
COPY . .
RUN pnpm run build

FROM base AS runtime
# Copy production dependencies
COPY --from=prod-deps /app/node_modules ./node_modules
# Copy built application
COPY --from=build /app/dist ./dist
# Copy package.json for any runtime requirements
COPY --from=build /app/package.json ./

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD node ./dist/server/entry.mjs
