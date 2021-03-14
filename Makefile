.PHONY: proto android ios build

default: build

build: 
	fastlane android 

android-build-beta: 
	fastlane android build_beta

android-build-release: 
	fastlane android build_release

android-deploy-release-beta: 
	fastlane android deploy_release_beta

android-deploy-release: 
	fastlane android deploy_release

ios-build-beta: 
	fastlane ios build_beta

ios-build-release: 
	fastlane ios build_release

ios-deploy-release-beta: 
	fastlane ios deploy_release_beta

ios-deploy-release: 
	fastlane ios deploy_release

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
