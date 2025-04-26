FROM mcr.microsoft.com/playwright:v1.43.1-jammy

WORKDIR /app
COPY . .

RUN npm install
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]
