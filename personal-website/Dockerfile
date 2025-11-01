# Use the official Nginx image to serve static assets
# The default directory that static assets are served out of is /usr/share/nginx/html as documented in the official NGINX Docker image.
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the static website files into the Nginx content directory
COPY . /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx (this is the default command from the base image)
CMD ["nginx", "-g", "daemon off;"]
