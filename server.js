const express = require('express')
const {buildSchema} =require('graphql')
const {graphqlHTTP} = require('express-graphql')

const PORT = process.env.PORT || 3000

const schema = buildSchema(`
    type Query{
        description: String,
        price: Float
    }`
)   

const root = {
    description: "red shoe",
    price: 23.21
}

const app = express()

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
app.listen(PORT, ()=>{
    console.log(`Graphql server running on port ${PORT}...`)
})