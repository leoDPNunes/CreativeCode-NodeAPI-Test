# CreativeCode-NodeAPI-Challenge

The challenge is to create an Typescript node API of User, Address, Session, JWT, Tests using an ORM to connect to Postgres.

This application provides the creation, read for users, address and also the session for the user.


- **Important** you need to create a userLogin and authenticate in order of test the address and user's routes.


### :keyboard: Project's Setup and workaround

- Clone the repositoy bellow

```
https://github.com/code36u4r60/ignite-desafio-corrigindo-o-codigo.git
```

```

- Open the project folder path in the terminal

```
cd ignite-desafio-corrigindo-o-codigo
```

- Install the project's dependencies

```
yarn install
```

- You gonna need install the docker-compose to run the application and database.

- Run the command bellow inside your project's path to download the dockerimages and start the services.

```

sudo docker-compose up -d

```

- You can check if the containers are ready using the comando bellow

```

sudo docker ps

```

- Run the migration commands to create the tables on the database

```

yarn typeorm migration:run

```
- You can open two different terminals in order to check the logs of the application and the databsase using this commands in each terminal's tab:

```

sudo docker logs app-ccapi -f

sudo docker logs database-ccapi -f

```

- To test the routes you can use insmonia, postman or open the path bellow:

```

http://localhost:3333/api-docs

The routes are:

User
POST /users
GET /users

Address
POST /address
GET /address

/session
passing username: string and password: string

/usersLogin
passing username: string and password: string





```

- To run the application test you can use the comando:

```
yarn test
```
