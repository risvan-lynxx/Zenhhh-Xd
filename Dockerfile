FROM quay.io/eypzgod/izumi:latest
RUN git clone https://github.com/risvan-lynxx/zen-bot.git /bot
WORKDIR /bot
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
