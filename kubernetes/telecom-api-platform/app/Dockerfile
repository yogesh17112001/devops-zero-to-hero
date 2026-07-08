# Use the official Node.js image as the base image
# This image already has Node.js installed
FROM node:20-alpine

# Set the working directory inside the container
# All following commands will run from /app
WORKDIR /app

# Copy package.json from your local machine to the container
# We copy this first to take advantage of Docker layer caching
COPY package.json .

# Install all Node.js dependencies listed in package.json
RUN npm install

# Copy the remaining application files (server.js, etc.) into the container
COPY . .

# Tell Docker that the application listens on port 3000
# This is documentation; it does not publish the port
EXPOSE 3000

# Start the application when the container launches
CMD ["npm", "start"]