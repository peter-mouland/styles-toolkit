FROM hub.noths.com/node:4.2

ENV NODE_ENV production

COPY . $HOME
RUN ln -sf /config/application.json $HOME/config/application.json

RUN npm install --loglevel warn
RUN ./node_modgit sules/gulp/bin/gulp.js build