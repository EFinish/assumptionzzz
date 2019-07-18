# import golang image from docker hub
FROM golang:alpine

# import server and html file into container
ADD server/server.go /server/
ADD server/index.html /server/
ADD build/client.js /server/

# define where all commands will be executed from within container
WORKDIR /server/