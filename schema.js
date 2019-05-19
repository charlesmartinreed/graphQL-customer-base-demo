// query responses, mutations, etc.
const axios = require("axios");

const {
  //bring in types
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

// DUMMY DATA FOR TESTING //
// const customers = [
//   { id: 1, name: "Jane Doe", email: "jdoe@gmail.com", age: 35 },
//   { id: 2, name: "Maya Doe", email: "mdoe@gmail.com", age: 21 },
//   { id: 3, name: "Billy Doe", email: "bdoe@gmail.com", age: 9 }
// ];

// Custom Types
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    // define the fields a customer type object should have
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      // using our CustomerType to speciify that data should exist in a customer object
      type: CustomerType,
      args: {
        // fetch by id
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        // handle the response by looping through the users and finding the matching customer - testing with hardcoded dummy data
        // for (let i = 0; i < customers.length; i++) {
        //   if (customers[i].id == args.id) {
        //     return customers[i];
        //   }
        // }

        // axios request here - returns a promise, which we convert to data
        return axios
          .get(`http://localhost:3000/customers/${args.id}`)
          .then(res => res.data);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        // no args needed because we're not fetching by a specific query
        return axios
          .get("http://localhost:3000/customers")
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  // takes in a ObjectType of "root query", which is the baseline for all other queries
  query: RootQuery
});
