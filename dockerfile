FROM mhart/alpine-node:12

ENV TZ="/usr/share/zoneinfo/Asia/Seoul"
ENV HOST 0.0.0.0

ARG PROJECT_DIR=/prisma-boilerplate/web

RUN npm install -g yarn

WORKDIR ${PROJECT_DIR}

COPY . ${PROJECT_DIR}
RUN yarn install

RUN yarn build 

# change this to your custom port
EXPOSE 3000

# RUN start
CMD ["yarn", "start"]