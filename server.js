const express = require('express')
const {buildSchema} =require('graphql')
const {graphqlHTTP} = require('express-graphql')

const PORT = process.env.PORT || 3000

const schema = buildSchema(`
    type Query{
       products: [Product]
       orders:[Order]
    }
    
    type Product{
        id: ID!
        description: String!
        reviews:[Review]
        price: Float!
    }

    type Review{
        rating: Int!
        comment: String
    }
    type Order{
        date: String!
        subtotal: Float!
        items:[OrderItem]
    }

    type OrderItem{
        product: Product!
        quantity:Int!
    }


    
    `
)   

const root = {
  products:[
      {
          id:'redshoe',
          description: 'Red Shoe',
          price: 123.2
      },
      {
          id: 'bluejean',
          description: 'Blue jeans',
          price: 21.2
      }
  ],
  orders:[{
      date:'2005-05-05',
      subtotal: 34.2,
      items:[
          {
              product:{
                id:'redshoe',
                description: 'Old Red Shoe',
                price: 13.2
              },
              quantity: 2
          }
      ]
  }]


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