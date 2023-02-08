FROM node:16-alpine as builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

#NGINX build part

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

# default command in nginx container is run nginx.
# so no need for CMD
