FROM node:20-alpine as build
WORKDIR /app
COPY  package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
# RUN npm install esbuild@0.24.2 --save-dev
# RUN npm run build

# ARG VITE_API_URL
# ENV VITE_API_URL=${VITE_API_URL}

# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY <<EOF /etc/nginx/conf.d/default.conf
# server {
#     listen 80;
#     server_name localhost;
#     root /usr/share/nginx/html;
#     index index.html;

#     location / {
#         try_files \$uri \$uri/ /index.html;
#     }
# }
# EOF
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]