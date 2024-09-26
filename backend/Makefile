default: help

start:
	docker start roadb

stop:
	docker stop roadb

clean:
	docker stop roadb && docker rm roadb

create-db:
	bash ./assets/scripts/start-dev.sh

seed-db:
	docker exec -it roadb /assets/scripts/seed-db.sh

help:
	@echo "\n\tTo start a new database instance run: make create-db"
	@echo "\tAfter the database instance is running, wait a few seconds and then run: make seed-db"
	@echo "\t---"
	@echo "\tTo start all over run: make clean"