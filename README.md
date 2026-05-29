# Local Sports & Indoor Games Partner Finder Platform

MERN project for finding nearby playing partners for indoor/outdoor games.

## Features
- User registration and login
- Profile with games, skill level, location, availability
- Search nearby players by game/location/skill
- Send, accept, decline play requests
- Match/play history
- Admin dashboard with users, games, requests, successful matches

## Run Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Seed games:
Open browser: http://localhost:5000/api/games/seed

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Open: http://localhost:5173

## MongoDB
Install MongoDB Community Server or use MongoDB Atlas. Update MONGO_URL in backend/.env.

## Test Admin
Register with role = admin from register page, then login and open Admin Dashboard.
