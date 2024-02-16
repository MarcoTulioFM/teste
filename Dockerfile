# Estágio de compilação
FROM node:latest AS builder

WORKDIR /api

COPY --chown=1000:1000 package*.json ./

RUN npm install

COPY --chown=1000:1000 . .

CMD ['npx', 'sequelize-cli', 'db:migrate']

# Estágio de produção
FROM node:latest

WORKDIR /api

COPY --from=builder --chown=1000:1000 /api/node_modules ./node_modules
COPY --from=builder --chown=1000:1000 /api/package*.json ./

COPY --from=builder --chown=1000:1000 /api/ .

EXPOSE 3000

CMD ["node", "app.js"]
