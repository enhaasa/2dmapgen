# Use an official node image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use an official nginx image to serve the built app
FROM nginx:alpine

# Copy the built app from the previous step to nginx's html directory
COPY --from=0 /dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
