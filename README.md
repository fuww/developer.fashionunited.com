# developer.fashionunited.com

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffuww%2Fdeveloper.fashionunited.com.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffuww%2Fdeveloper.fashionunited.com?ref=badge_shield)

FashionUnited Developer Portal, built with [Astro](https://astro.build/) and the excellent [Astro Starlight template](https://astro.build/themes/details/starlight/)

## Run

```bash
nix develop
npm install
npm run dev
```

## Run devenv

```bash
nix develop
npm run dev # works without installing node, npm, pnpm globally. Nix packaga manager is used.
```

## Install Nix package manager on MacOS

Install Nix with the Nix installer from [Determinate Systems](https://docs.determinate.systems/getting-started/organizations).

## Docker image

```bash
gcloud auth configure-docker europe-west1-docker.pkg.dev

Terminal window
# build your container
docker build -t developers-fashionunited-com .

docker tag developers-fashionunited-com europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest

# Push your image to a registry
docker push europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest

# One-liner:
docker build -t europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest . && docker push europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest
```

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffuww%2Fdeveloper.fashionunited.com.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffuww%2Fdeveloper.fashionunited.com?ref=badge_large)
