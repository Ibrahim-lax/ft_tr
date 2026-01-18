BACKEND_SVC = backend

all: up setup
	

up :
	docker compose up --build -d


d: 
	docker compose down

# uncomment setup rule FOR UBUNTU

# setup:
# 	@echo "⏳ Waiting for database to be ready..."
# 	@# This loop waits until the backend can successfully ping the DB
# 	@until docker-compose exec $(BACKEND_SVC) npx prisma dev &> /dev/null; do \
# 		sleep 1; \
# 	done
# 	@echo "✅ Database is up! Syncing schema..."
# 	docker compose exec $(BACKEND_SVC) npx prisma db push
# 	docker compose exec $(BACKEND_SVC) npx prisma generate
# 	@echo "🚀 Tables created and Client generated. Coding time!"


# uncomment setup rule FOR MACOS
setup:
	@echo "⏳ Waiting for database to be ready..."
	@until docker compose exec backend npx prisma dev > /dev/null 2>&1; do \
		sleep 1; \
	done
	@echo "✅ Database is up! Syncing schema..."
	docker compose exec backend npx prisma db push
	docker compose exec backend npx prisma generate
	@echo "🚀 Tables created and Client generated. Coding time!"


c:
	@echo "Cleaning up all Docker resources..."
	-@docker stop $$(docker ps -qa) 2>/dev/null || true
	-@docker rm $$(docker ps -qa) 2>/dev/null || true
	-@docker rmi -f $$(docker images -qa) 2>/dev/null || true
	-@docker volume rm $$(docker volume ls -q) 2>/dev/null || true
	-@docker network rm $$(docker network ls -q) 2>/dev/null || true
	-@docker builder prune -f 2>/dev/null || true
	@echo "Cleanup complete!"
