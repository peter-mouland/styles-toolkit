FROM hub.noths.com/node:4.2

COPY . $HOME
RUN ln -sf /config/application.json $HOME/config/application.json

RUN npm install --loglevel warn
RUN ./node_modules/gulp/bin/gulp.js build