# Use Node.js 18 Alpine as a base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy load test script
COPY load-test.js .

# Default command runs the load test script
# Pass target URL and number of requests as environment variables if needed
CMD ["node", "load-test.js"]
