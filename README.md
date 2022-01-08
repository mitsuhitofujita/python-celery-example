# python-sqs-censumer

## Start docker compose
docker compose up
docker compose exec celery bash

## Run Celery

poetry run python main.py
poetry run celery -A tasks:app worker -Q ${queue-name}

## Test

poetry run pytest

## Lint

poetry run flake8 app
poetry run flake8 tests

## Build history
poetry init
poetry config virtualenvs.in-project true
poetry add requests
poetry add pycurl
poetry add boto3
poetry add celery[sqs]
poetry add black -D
poetry add flake8 -D
poetry add isort -D
poetry add pytest

