const express = require("express"),
  app = express(),
  port = process.env.PORT || 4000;

const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");

// WITH THIS IMPLEMENTATION, WE ONLY NEED ONE ROUTE - THE ROUTE TO GRAPHQL
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
    // takes in config obj with schema, boolean for whether or not we're using the GUI
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
