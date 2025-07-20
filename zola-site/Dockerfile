# Node stage for building Tailwind CSS
FROM node:18-alpine as node-builder

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install

COPY . .
RUN npm run build:css

# Build stage
FROM ghcr.io/getzola/zola:v0.18.0 as builder

WORKDIR /app
COPY . .
COPY --from=node-builder /app/static/css/tailwind.css ./static/css/

# Build the site
RUN zola build

# Runtime stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/public /usr/share/nginx/html

# Copy nginx config for proper routing
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ $uri.html =404; \
    } \
    error_page 404 /404.html; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]