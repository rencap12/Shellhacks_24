# Use a Node.js image
FROM node:latest AS builder

# Set working directory
WORKDIR /usr/src/app


# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./


RUN npm install 
#--save-dev @rollup/rollup-linux-x64-gnu
# RUN npm install --ignore-scripts


# Copy the rest of the app's source code
COPY . .

# Expose the development port for Vite
EXPOSE 3000

# Start Vite's dev server with hot reloading
CMD ["npm", "run", "dev"]
