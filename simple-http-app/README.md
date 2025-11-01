# Simple HTTP Application

This directory contains a simple Node.js/Express application that receives JSON payloads via HTTP POST and stores them to a `payloads.log` file.

## Prerequisites

- Node.js 18 or later
- npm package manager

## Setup

1. Navigate to this directory:

   ```bash
   cd simple-http-app
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

Start the HTTP server using Node:

```bash
node server.js
```

By default the server listens on port `3000`. You can override the port by setting the `PORT` environment variable:

```bash
PORT=8080 node server.js
```

## Sending Requests

Send an HTTP `POST` request with a JSON body to the root endpoint (`/`) to store payloads:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, world!"}' \
  http://localhost:3000/
```

The payload will be appended to `payloads.log` along with a timestamp.

## Docker

A `Dockerfile` is provided to containerize the application. To build and run the container locally:

```bash
docker build -t simple-http-app .
docker run -p 3000:3000 simple-http-app
```

## Helm Chart

A Helm chart will be provided under the `chart/` directory for deploying this application to Kubernetes.
