FROM golang:latest
ADD . /go/src/ass-server
WORKDIR /go/src/ass-server
RUN go get ass-server
RUN go install
ENTRYPOINT ["/go/bin/ass-server"]