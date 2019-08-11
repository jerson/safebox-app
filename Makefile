.PHONY: proto android build

default: build

build: 
	cd android && fastlane android 

android-build-beta: 
	cd android && fastlane android build_beta

android-build-release: 
	cd android && fastlane android build_release

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

proto-ios:
	protoc -I=proto services.proto \
    --swift_out=. \
    --swiftgrpc_out=Client=true,Server=false:.