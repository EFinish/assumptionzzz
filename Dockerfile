# # from === use THIS predefined docker image
# FROM golang:alpine AS build
# RUN apk --no-cache add gcc g++ make git
# WORKDIR /go/src/app
# COPY . .
# RUN go get ./...
# RUN GOOS=linux go build -ldflags="-s -w" -o ./bin/web-app ./server.go

# FROM alpine:3.9
# RUN apk --no-cache add ca-certificates
# WORKDIR /usr/bin
# COPY --from=build /go/src/app/bin /go/bin
# EXPOSE 420
# ENTRYPOINT /go/bin/web-app --port 420

# import golang image from docker hub
FROM golang:alpine

# import server and html file into container
ADD server/server.go /server/
ADD server/index.html /server/
ADD build/client.js /server/

# define where all commands will be executed from within container
WORKDIR /server/