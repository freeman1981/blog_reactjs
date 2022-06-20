FROM node AS dev
WORKDIR /src
COPY package*.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
EXPOSE 3000
CMD ["npm", "start"]

FROM node AS build
WORKDIR /src
COPY package.json ./
ENV REACT_APP_HOST=http://app-provider:8000
RUN npm install --only=prod
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
