# Use Node.js version 17 base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 3000

# Set environment variable so React binds to 0.0.0.0
ENV HOST=0.0.0.0

# Run the app
CMD ["npm", "start"]
