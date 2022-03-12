const express = require('express')
const {buildSchema} =require('graphql')
const {graphqlHTTP} = require('express-graphql')

const PORT = process.env.PORT || 3000

const app = express()


app.listen(PORT, ()=>{
    console.log(`Graphql server running on port ${PORT}...`)
})