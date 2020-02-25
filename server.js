const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
import { authors, books } from './exampleData'

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            messsage: {
                type: GraphQLString,
                resolve: () => 'Hello world'
            }
        }),
    })
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.listen(5000., () => console.log("server running on port 5000"))