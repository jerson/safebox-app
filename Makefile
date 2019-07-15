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

stop:
	docker-compose stop

dev:
	docker-compose build
	docker-compose up -d
	clear
	@echo ""
	@echo "starting command line:"
	@echo "** when finish exist and run: make stop**"
	@echo ""
	docker-compose exec app sh
