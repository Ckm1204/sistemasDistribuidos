FROM nginx:1.21.6

RUN rm /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se inicia
CMD ["nginx", "-g", "daemon off;"]