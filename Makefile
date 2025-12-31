

all:
	docker compose up --build -d

d:
	docker compose down

c: d
