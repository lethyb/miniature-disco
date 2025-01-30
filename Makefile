UID=$(shell id -u)
GID=${shell id -u}

ARGS=UID=${UID} GID=${GID}

DC_CMD=${ARGS} docker-compose

default:
	make --help

create:
	${DC_CMD} build --force-rm --no-cache && \
	make upy

start:
	${DC_CMD} up

build:
	${DC_CMD} run react yarn build

stop:
	${DC_CMD} down

restart:
	make stop start

upy:
	${DC_CMD} run react yarn

test:
	${DC_CMD} run react yarn test
