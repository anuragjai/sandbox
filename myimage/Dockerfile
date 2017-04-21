FROM ubuntu:14.04
FROM node:5.0
#RUN apt-get update
FROM nginx

MAINTAINER Anurag Jaiswal "14mcmc08@gmail.com"
WORKDIR /home/anurag/myimage  
ADD index.js ./  

#Install app dependencies
COPY package.json ./
COPY server.js ./ 

RUN npm install  
RUN apt-get install -y curl

CMD ["node", "index.js"] 

EXPOSE 3000
CMD ["node", "server.js"] 
CMD ["npm", "start"] 

#CMD ["echo","Image created"]

