# from === use THIS predefined docker image
FROM golang:alpine

# 'mounts' server directory to container's standard go path
ADD ./server /go/src/app

# define the working directory for this container to the container's standard go path
WORKDIR /go/src/app

# define the port we want to serve this container's content from
ENV PORT=54321

# run this command
CMD ["go", "run", "/server/server.go"]
