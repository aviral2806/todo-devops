FROM node:20-alpine as build
WORKDIR /app
COPY  package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm install esbuild@0.24.2 --save-dev
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]