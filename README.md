# Budget Tracker (MERN)

> Full MERN stack budget tracker

## Live version at: https://b-tracker.herokuapp.com/

## Usage

```
add .env file with keys:

PORT = desired port number,
NODE_ENV = "development", 
DB_CONNECTION = connection string to local or remot Mongo DB database and 
JWT_SECRET = desired secret for signing JWT tokens
```

```
 cd client
 npm install
 cd ..
 cd server
 npm install
 cd server
 
 # Run full app on single port in development mode
 npm run dev
 
 # Run express backend only
 npm run server
 
 # Frontend only
 npm run client
 
 # Build client
 cd ..
 cd client
 npm run build
 
 # Prod
 npm start
```
