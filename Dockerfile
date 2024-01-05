# Stage 1: Build the React app
FROM node:20-alpine as builder

ARG VITE_MODE
ENV VITE_MODE=$VITE_MODE

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the application
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
