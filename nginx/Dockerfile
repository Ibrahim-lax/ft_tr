FROM nginx:alpine

# 1. Install openssl
RUN apk add --no-cache openssl

# 2. Create directory for certs
RUN mkdir -p /etc/nginx/certs


RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/transcendence.key \
    -out /etc/nginx/certs/transcendence.crt \
    -subj "/C=MA/ST=Oriental/L=Oujda/O=42/OU=ft_transcendence/CN=localhost"

# 4. Remove default config and add yours
RUN rm /etc/nginx/conf.d/default.conf

COPY conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443