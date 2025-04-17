FROM quay.io/eypzgod/izumi:latest
RUN git clone https://github.com/risvan-lynxx/Zenhhh-Xd.git /yuki
WORKDIR /Zenhhh
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
