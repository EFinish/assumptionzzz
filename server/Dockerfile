# import golang image from docker hub
FROM golang:alpine

COPY . /app/

# define where all commands will be executed from within container
WORKDIR /app/

RUN go build server.go