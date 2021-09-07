# Tensor Server

Server for mobilenet image classification using tensorflow

## Requirements

- Node 12^
- Git
- Yarn
- A sound mind

## Setup

Clone the repo and install the dependencies.

```bash
git clone git@github.com:10688182/ImageRecognitionServer.git tensor-server
cd tensor-server
```

```bash
yarn install
```

## Running App

To start the server, run the following

```bash
yarn start
```

## Classifying an Image

```bash
curl --location --request POST 'localhost:3000/classify' \
--form 'image=@"/PATH_TO_IMAGE/image.png"'
```

