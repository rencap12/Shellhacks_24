# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app


# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the backend port
EXPOSE 4000

# Use nodemon to watch for file changes and auto-restart
CMD ["npm", "run", "dev"]
