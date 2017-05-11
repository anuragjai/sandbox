FROM ubuntu:14.04
FROM node:5.0
RUN apt-get update
#FROM nginx

MAINTAINER Anurag Jaiswal "14mcmc08@gmail.com"
WORKDIR /home/anurag/myimage  
#ADD api.js ./  
#ADD service.js ./

COPY api.js ./
COPY service.js ./ 

# Install app dependencies

#ADD package.json /home/anurag/myimage/package.json
COPY package.json /home/anurag/myimage


RUN npm install  
RUN apt-get install -y curl

EXPOSE 8081
CMD ["npm", "start"] 

#CMD ["echo","Image created"]

