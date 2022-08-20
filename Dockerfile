# Stage 0 - Build Frontend Assets
FROM node:latest as build

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --platform=darwin --arch=arm64v8 sharp
COPY . .
RUN yarn global add gatsby-cli
RUN gatsby build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
