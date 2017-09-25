# JS-Movies

A movies REST API using Node, MongoDB, Express and ES6

Technologies used:
- Node JS
- Express
- ES6
- MongoDB
- Json Web Token (JWT)
- Mocha

## Installation
```sh
git clone
cd

# install yarn
npm install -g yarn

# install dependencies
yarn 

# configure environment variables
cp .env.example .env

# start server
yarn start

# run test suite
yarn test

```

## Test REST API:
```sh
# check server is running ok on default port 4040
curl localhost:4040/api/health-check

# try to login and get JWT
curl -X POST localhost:4040/api/auth/login

# list users
curl localhost:4040/api/users/

# list movies 
curl localhost:4040/api/movies

# retrive movie details
curl localhost:4040/api/movies/diajf67dafj
```

