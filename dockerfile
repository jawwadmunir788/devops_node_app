# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

#Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

#Expose port
EXPOSE 8080

# Start application
CMD ["npm", "start"]
