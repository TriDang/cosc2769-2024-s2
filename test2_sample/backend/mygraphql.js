const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} = require('graphql');

const { customers, orders, products } = require('./data');

// total purchased quantity for a product
function get_total_quantity(product) {
  let total = 0;
  orders.forEach((o) => {
    if (o.product_id == product.id) {
      total += o.quantity;
    }
  });
  return total;
}

function get_customers(args) {
  const name = args.name;
  if (name === '*') {
    return customers;
  }
  return customers.filter((c) => c.name.includes(name));
}

const CustomerType = new GraphQLObjectType({
  name: 'Customers',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
  },
});

const ProductType = new GraphQLObjectType({
  name: 'Products',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    sell_off: { type: GraphQLBoolean },
    percent: {
      type: GraphQLFloat,
      resolve: (p) => {
        if (p.sell_off) {
          return p.percent;
        }
        return 0;
      },
    },
    quantity_sold: { type: GraphQLInt, resolve: (p) => get_total_quantity(p) },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      customers: {
        type: new GraphQLList(CustomerType),
        args: { name: { type: GraphQLString } },
        resolve: (parent, args) => get_customers(args),
      },
      products: {
        type: new GraphQLList(ProductType),
        resolve: () => products,
      },
    },
  }),
});

const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen(8888, () => {
  console.log('Server started');
});
