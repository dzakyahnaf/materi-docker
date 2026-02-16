FROM golang:1.22-alpine

WORKDIR /app

# copy go mod dulu (best practice)
COPY go.mod ./
RUN go mod tidy

# copy source code
COPY main.go ./

# build binary
RUN go build -o app

EXPOSE 8080

CMD ["./app"]
