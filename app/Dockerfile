# Usa una imagen base de Node.js
FROM node:15

RUN npm cache clean --force

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo actual
COPY . .

# Expone el puerto en el que se ejecuta tu aplicación Express
EXPOSE 3000

# Comando para iniciar tu aplicación cuando el contenedor se inicia
CMD ["node", "server.js"]
