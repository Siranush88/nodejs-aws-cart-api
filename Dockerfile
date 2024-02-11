# # # Stage 1: Build the application
# # FROM node:18-alpine AS builder

# # WORKDIR /app

# # COPY package*.json ./

# # # Install dependencies including rimraf globally
# # RUN npm install -g rimraf && npm install

# # COPY . .

# # # Build the application
# # RUN npm run build

# # # Stage 2: Create production image
# # FROM node:18-alpine

# # # Set working directory
# # WORKDIR /app

# # # Copy built application from the previous stage
# # COPY --from=builder /app/dist .
# # #COPY --from=builder /usr/src/app/node_modules ./node_modules

# # # Expose port (if applicable)
# # EXPOSE 4000

# # Command to run the application
# CMD ["node", "dist/main.js"]

# Stage 1
FROM node:18-alpine AS builder

WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy files and folders to the working directory
COPY . .

# build
RUN npm run build

# Stage 2
FROM node:18-alpine

WORKDIR /app

# copy the bundle from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# it doesn't work without it :'(
EXPOSE 4000

# run the app
CMD [ "node", "dist/src/main.js" ]

# # Stage 1: Build the application
# FROM node:18-alpine AS builder

# WORKDIR /app

# COPY package*.json ./

# # Install dependencies including rimraf globally
# RUN npm install -g rimraf && npm install

# COPY . .

# # Build the application
# RUN npm run build

# # Stage 2: Create production image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy built application from the previous stage
# COPY --from=builder /app/dist .

# # Expose port (if applicable)
# EXPOSE 4000

# # Command to run the application
# CMD ["node", "dist/main.js"]