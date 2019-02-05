FROM nginx:alpine
COPY dist /data/www/
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx-debug",  "-g daemon off;"]