# Express & Graphql with jwt


## initialize typescript 

```console

tsc --init

```

> Note Uncomment from `tsconfig.json`

```json

"outDir": "./build",
"rootDir": "./src",                             
"moduleResolution": "node",
"experimentalDecorators": true,                
"emitDecoratorMetadata": true,    

```

## initialize npm

```console

npm init -y

```


## Install All module


```console

npm i bcryptjs dotenv express express-graphql graphql pg reflect-metadata typeorm uuid

```


## Installing Type 

```console

npm i @types/bcryptjs @types/dotenv @types/express @types/express-graphql @types/graphql @types/pg  @types/uuid @types/node

```

## Dev dependance 

```console

npm i -D nodemon ts-node typescript


```

## `typeorm` to connect to databases config file `ormconfig.json`

```json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "",
    "password": "",
    "database": "db_dev",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ]
}

```

## PostgreSQL Setup

```bash

createdb -E UTF8 db_dev

```