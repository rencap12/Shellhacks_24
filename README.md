**pending tasks:**
- clean up UI
- post onto devPost
- integrate with Defang?
- try using a styling framework? - tailwind
- optimize

https://youtu.be/3UFnxIUfanE


# RPL - Research, Plan, Learn

**Need help finding resources to level up your skillset? RPL provides insightful, educational resources based on a user's charactertics for any subject - Biology, Software, anything!**

## Overview - Full Stack App with React, Node.js, OpenAI API, and Docker
This is a full-stack application using React for the client with Node.js and OpenAI API for the backend. The app is fully Dockerized, making it easy to spin up in any environment.

## Technologies
- **Frontend**: React (Vite)
- **Backend**: Node.js with Express
- **Containerization**: Docker and Docker Compose

## Prerequisites
- Node.js (v14+)
- Docker (v20+)

## Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/rencap12/Shellhacks_24.git
cd Shellhacks_24
```

## Option 1: Run Manually
Run the Backend (Node.js)
```bash
cd server
npm install
npm start
```
Can also use 'nodemon server.js'

The backend will run on http://localhost:4000.


Open another terminal.

Run the Frontend (React with Vite)
```bash
cd client
npm install
npm run dev
```
The frontend will run on http://localhost:3000.

Go to http://localhost:3000. You should see the frontend connected to the backend.


## Option 2: Use Docker
Ensure Docker is installed and running on your machine

From the root of your project (/Shellhacks_24), run in the terminal:
```bash
docker-compose up --build
```
This will spin up both the React (Vite) frontend and the Node.js backend in Docker containers.

Access the Application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000/api

To stop the containers, run in the terminal:
```bash
docker-compose down
```

## Directory Structure
- /Shellhacks_24
  - /client  # React (Vite) frontend
  - /server  # Node.js backend
  - README.md  # Project documentation
  - docker-compose.yml  # Docker services
  - .dockerignore  # Docker ignore file

