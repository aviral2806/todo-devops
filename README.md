# 🚀 Todo App with Full DevOps Pipeline (CI/CD, Docker, Ansible, Terraform)

## **📌 Project Overview**

This is a **fully automated DevOps pipeline** for a Todo App, integrating modern technologies like **Docker, Docker Compose, GitHub Actions, Ansible, and Terraform**. With a single commit, the entire application is **built, pushed, and deployed automatically**.

## **🛠️ Tech Stack**

- **Frontend:** React.js (Vite)
- **Backend:** Spring Boot (Java) + PostgreSQL
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Configuration Management:** Ansible
- **Infrastructure as Code (IaC):** Terraform
- **Cloud Provider:** AWS (EC2 for deployment)

---

## **⚙️ Architecture Diagram**

```
                Developer Pushes Code
                          |
                  GitHub Actions (CI/CD)
                          |
      ------------------------------------
      |                                  |
 Docker Build & Push        Terraform (Infra Provisioning)
      |                                  |
      v                                  v
DockerHub                         AWS EC2 Instance
      |                                  |
      v                                  v
 Ansible Deploys on EC2       Docker Compose Starts Containers
      |                                  |
      v                                  v
Frontend (React)  <-->  Backend (Spring Boot)  <-->  Database (PostgreSQL)
```

---

## **🔧 How It Works?**

### **1️⃣ CI/CD Pipeline (GitHub Actions)**

- **On every commit to `main`,** the workflow triggers.
- It detects changes in `frontend/` or `backend/` and only builds what is needed.
- The Docker images are built and pushed to **DockerHub**.
- Ansible is then used to deploy the latest images to an **AWS EC2 instance**.

### **2️⃣ Infrastructure as Code (Terraform)**

- Terraform is used to provision an **EC2 instance** on AWS.
- The **public IP of EC2** is not automatically updated in the compose file and ansible inventory, but is kept in the secret variables for github actions, something which can be improved in the future

### **3️⃣ Configuration Management (Ansible)**

- Ansible pulls the latest Docker images from DockerHub.
- It stops old containers, updates the `docker-compose.yml`, and restarts the application.

---

## **💡 Key Features**

✅ **Fully Automated CI/CD** – Just commit and watch it deploy!

✅ **Optimized GitHub Actions Workflow** – Only builds what's changed.

✅ **Dockerized Application** – Ensures consistency across environments.

✅ **AWS Deployment with Terraform** – Infrastructure as Code (IaC).

✅ **Automated Server Setup with Ansible** – No manual work needed!

---

## **📌 Future Improvements**

🔹 Add Monitoring (Prometheus + Grafana) 📊

🔹 Implement Blue-Green Deployment for Zero Downtime 🚀

🔹 Use Kubernetes for Scaling ⚡

🔹 Align methodology with best practices in the industry

---

## **👨‍💻 Author**

👤 **Aviral Satija**  
📧 aviralsatija28@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/aviral-satija-2097588a)

---

### **⭐ If you found this useful, give it a star!** 🌟

```sh
git push origin main --follow
```
