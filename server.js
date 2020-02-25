const express = require('express');
const expressGraphQL = require('express-graphQL');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello world',
        fields: () => ({
            messsage: {
                type: GraphQLString,
                resolve: () => 'Hello world'
            }
        }),
    })
})

app.use('/graphql', expressGraphQL({
    grapiql: true
}))
app.listen(5000., () => console.log("server running on port 5000"))