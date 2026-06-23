# Docker Multi-Container Project

## 📌 Project Overview

This project demonstrates the deployment of a multi-container application using Docker and Docker Compose on VMware Cloud Director virtual machines.

The application consists of multiple containers working together to provide a complete web application environment.

---

## 🚀 Technologies Used

* VMware Cloud Director
* Ubuntu 22.04
* Docker
* Docker Compose
* Nginx
* Node.js
* MySQL
* Redis
* Git & GitHub

---

## 🏗️ Project Architecture

```text
User Browser
      │
      ▼
Frontend Container (Nginx)
      │
      ▼
Backend Container (Node.js)
      │
 ┌────┴────┐
 ▼         ▼
Redis    MySQL
```

---

## 🐳 Containers Used

| Container | Purpose                               |
| --------- | ------------------------------------- |
| Frontend  | Hosts the web application using Nginx |
| Backend   | Runs the Node.js API server           |
| MySQL     | Database service                      |
| Redis     | Caching service                       |

---

## ⚙️ Features

* Multi-container deployment
* Docker Compose orchestration
* Container networking
* Persistent storage using volumes
* Port mapping
* Container logs and monitoring
* Service isolation
* Easy deployment and management

---

## 📂 Project Structure

```text
docker-project/
│
├── frontend/
│   ├── Dockerfile
│   └── index.html
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## ▶️ Deployment Commands

```bash
docker compose build

docker compose up -d

docker ps
```

---

## 🔍 Docker Commands Used

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

## 🎯 Learning Outcomes

* Understanding Docker architecture
* Building Docker images
* Creating Docker containers
* Using Docker Compose
* Managing multi-container applications
* Container networking and volumes
* Real-world application deployment

---

## 👨‍💻 Author

**Shivani Sharma**



