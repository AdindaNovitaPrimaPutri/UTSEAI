FROM node:18.16.0
WORKDIR /UTS EAI 2/index.js
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["node", "UTS EAI 2/index.js"]