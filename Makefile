.PHONY: proto

default: build

build: build-android-release

build-android-beta: format
	yarn run build:android:beta

build-android-release: format
	yarn run build:android:release

deps:
	yarn install --pure-lockfile

test:
	yarn run test

lint:
	yarn run lint

format:
	yarn run format

proto:
	protoc -I=proto services.proto \
    --js_out=import_style=commonjs:src/proto \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/proto

 

