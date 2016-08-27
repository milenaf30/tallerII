FROM node

RUN apt-get update && apt-get install vim postgresql-client -y

WORKDIR /home

ADD code/package.json /home/package.json
RUN npm install
RUN npm install -g nodemon

CMD ["nodemon" , "-L", "server.js"]
#CMD ["tail" , "-f", "/dev/null"]
