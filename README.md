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

Install Nix with the Nix installer from Determinate Systems:

```bash
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```

## Create Artifact registry repo

```bash
gcloud artifacts repositories create developers-fashionunited-com --repository-format=docker \
--location=europe-west1 --description="Docker repository"
# verify
gcloud artifacts repositories list
```

## Docker image (Cloud Build)

```bash
gcloud builds submit --region=europe-west1 --config cloudbuild.yaml .
# When we use cloud logging and v2 builds:
gcloud beta builds submit --region=europe-west1 --config cloudbuild.yaml .
```

## Docker image (manual)

```bash
gcloud auth configure-docker europe-west1-docker.pkg.dev

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
