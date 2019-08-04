.PHONY: proto

default: build

build: android-build-beta

android-build-beta: format
	cd android && fastlane android build_beta

android-deploy-release-beta: 
	cd android && fastlane android deploy_release_beta

android-deploy-release: 
	cd android && fastlane android deploy_release

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
