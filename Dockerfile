FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]

LABEL traefik.enable=true
LABEL traefik.http.routers.docker.entrypoints=websecure
LABEL traefik.http.routers.docker.rule=Host(`docker.$DOMAIN`)
LABEL traefik.http.routers.docker.tls=true
LABEL traefik.http.routers.docker.tls.certresolver=le
