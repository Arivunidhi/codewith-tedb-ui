FROM node:14.16.1-alpine as build

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm install react-scripts@4.0.3 -g

RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
