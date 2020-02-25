const express = require('express');
const expressGraphQL = require('express-graphql');
// import only what we need in terms of types
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');
//extract what would be server data into its own file
const { books, authors } = require("./exampleData")

const app = express();

// creating our own book type
const BookType = new GraphQLObjectType({
    name: "Book",
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) }, // must be a new non nullable type of int
        name: { type: GraphQLNonNull(GraphQLString) }, // also non nullable type of string
        authorId: { type: GraphQLNonNull(GraphQLInt) } // 
    })
})

// root query type
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => books
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

// simple express server
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.listen(5000., () => console.log("server running on port 5000"))