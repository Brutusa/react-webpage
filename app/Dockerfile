FROM node:18.13.0
WORKDIR /app
COPY Package*.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app . user/share/nginx/html



