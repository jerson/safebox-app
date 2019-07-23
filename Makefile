.PHONY: proto

default: build

build: build-android

build-android-release: format
	yarn run build:android:release

deps:
	yarn install --pure-lockfile

test:
	yarn run test

format:
	yarn run prettier

proto:
	protoc -I=proto services.proto \
    --js_out=import_style=commonjs:src/proto \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/proto

proto-gents:
	protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:src" \
    --ts_out="service=true:src" \
    proto/services.proto

 

