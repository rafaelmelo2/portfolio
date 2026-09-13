# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Sem package-lock: o lock do WSL (glibc) impede o npm de pegar o binário musl do Rollup no Alpine
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage - servir com nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
