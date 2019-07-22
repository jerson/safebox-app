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
