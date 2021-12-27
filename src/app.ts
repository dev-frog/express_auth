import express, { response } from 'express'
import {graphqlHTTP} from 'express-graphql'
import dotenv from 'dotenv'
import { schema, root } from './api/schema'
import { createConnection } from 'typeorm'


dotenv.config()
createConnection().then(async connection =>{
    const app = express()
    app.use(express.json())

    // middleware
    app.use(process.env.GRAPHQL_PATH!, graphqlHTTP(( request, response, graphQLParams) => ({
        schema: schema,
        rootValue: root,
        graphql: true,
        context: {
            req: request,
            res: response,
        }
    })));


    // listing
    app.listen(parseInt(process.env.APP_PORT!))
    const link = `http://localhost:${process.env.APP_PORT!}${process.env.GRAPHQL_PATH}`
    console.log(`Server started at url: ${link}`)
}).catch(error => {console.log(error)})
