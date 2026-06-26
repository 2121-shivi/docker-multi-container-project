# SETUP-GUIDE.md

# Multi-Container Application Deployment using Docker Compose

## 1. Project Overview

This guide explains the complete setup process for deploying a multi-container application using Docker Compose on VMware Cloud Director virtual machines.

The project consists of:

* Frontend Container (Nginx)
* Backend Container (Node.js)
* MySQL Container
* Redis Container

---

# 2. Environment Details

| Component        | Details               |
| ---------------- | --------------------- |
| Platform         | VMware Cloud Director |
| Operating System | Ubuntu 22.04          |
| Container Engine | Docker                |
| Orchestration    | Docker Compose        |

---

# 3. Virtual Machine Configuration

| VM Name       | Purpose              |
| ------------- | -------------------- |
| Docker-App    | Main Docker Host     |
| Mysql-Server  | Optional Database VM |
| Backup-Server | Optional Backup VM   |

The complete application is deployed on the Docker-App VM.

---

# 4. Update System

```bash
apt update
apt upgrade -y
```

---

# 5. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
```

Verify:

```bash
docker --version
```

---

# 6. Install Docker Compose

```bash
apt install docker-compose-plugin -y
```

Verify:

```bash
docker compose version
```

---

# 7. Create Project Directory

```bash
mkdir /root/docker-project

cd /root/docker-project

mkdir frontend backend
```

---

# 8. Frontend Configuration

Create:

```bash
cd frontend

nano index.html
```

Create Dockerfile:

```dockerfile
FROM nginx
COPY . /usr/share/nginx/html
```

---

# 9. Backend Configuration

Create:

```bash
cd ../backend
```

Files:

* server.js
* package.json
* Dockerfile

Dockerfile:

```dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]
```

---

# 10. Docker Compose Configuration

Create:

```bash
nano docker-compose.yml
```

Add:

```yaml
services:

  frontend:
    build: ./frontend
    ports:
      - "80:80"

  backend:
    build: ./backend
    ports:
      - "3000:3000"

  redis:
    image: redis

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root123
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

---

# 11. Build Containers

```bash
docker compose build
```

---

# 12. Start Containers

```bash
docker compose up -d
```

---

# 13. Verify Containers

```bash
docker ps
```

Expected containers:

* frontend
* backend
* mysql
* redis

---

# 14. Useful Docker Commands

```bash
docker images

docker ps

docker logs frontend

docker logs backend

docker network ls

docker volume ls

docker stats
```

---

# 15. Access Application

Frontend:

```text
http://SERVER-IP
```

Backend:

```text
http://SERVER-IP:3000
```

API:

```text
http://SERVER-IP:3000/api
```

---


# 18. Conclusion

The project successfully demonstrates the deployment of a multi-container application using Docker Compose.

The implementation provides hands-on experience with:

* Docker Images
* Containers
* Dockerfiles
* Docker Compose
* Container Networking
* Volumes
* Multi-container Applications

This project reflects real-world container deployment practices used in modern software development environments.
