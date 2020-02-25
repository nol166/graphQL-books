# graphQL-books

To use clone the repo and run `npm run devStart`

*The project uses the `graphiql` interface for requesting data from the API*   

Usage:
```
{
    books // returns a list of all books
}
```
```
{
    authors // returns a list of all authors
}
```

Add books/authors
```
mutations {
    addAuthor (name: "John Appleseed")
}