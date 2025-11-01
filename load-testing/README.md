# Load Testing Project

This directory contains a simple Node.js script for performing load tests against an HTTP endpoint. The script repeatedly sends a configurable number of HTTP or HTTPS requests to a target URL and reports the status code and duration of each request.

## Prerequisites

- [Node.js](https://nodejs.org/) version 12 or later is recommended.

## Usage

1. Navigate to the `load-testing` directory.

2. Run the script with node, passing the target URL and optionally the number of requests to send:

```
node load-test.js <target_url> <number_of_requests>
```

- `<target_url>` — the full URL (including protocol and port) you want to test, for example `http://localhost:3000`.
- `<number_of_requests>` — the number of requests to send (default is 100).

Example:

```
node load-test.js http://localhost:3000 200
```

If you omit both arguments, the script defaults to `http://localhost:3000` and 100 requests.

## What it does

For each request the script records:
- The HTTP status code returned by the server.
- The time taken (in milliseconds) for the request to complete.

Once all requests have completed, the script prints “Load test complete”.
