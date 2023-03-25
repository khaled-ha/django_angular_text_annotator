.PHONY: clean venv create_super_user migration makemigrations run shell set_env log

clean: ## clean virtual env
	rm -rf venv

venv: ## create virtaual env and install requirements
	python -m venv venv
	source venv/bin/activate & pip install -r requirements.txt

set_env: ## set up env file
	cp ubia_test/env.tpl ubia_test/.env

create_super_user: ## create super user in django
	docker-compose exec ubia python manage.py createsuperuser

makemigrations: ## create new migrations
	docker-compose exec ubia python manage.py makemigrations

migration: ## apply migration
	docker-compose exec ubia python manage.py migrate

run: ## run the project
	docker-compose up -d --build
log:
	docker logs -f $$(docker ps | grep 8000 | awk '{ print $$1 }')

attach:
	docker attach $$(docker ps | grep 8000 | awk '{ print $$1 }')