## What is GraphQL?

---

- It's a query language for your Application Layer or API
- Open sourced by Facebook in 2015
- With GraphQL, we query app layer of the server so we can tap into any type of data, SQL, NoSQL, etc.
- Fetch only what you need
- Make multiple requests at once
- GraphQL APS are organized in terms of types and fields
- Wide language support; pretty much
- Facebook mobile apps have used GraphQL since 2012, other companies like Github and Pinterest also use it.
- Uses "mutations", which are requests that are used to alter server side data.

Type Query {
user: User
}

Type User {
name: String,
age: Int,
posts: [String]
}

## GraphQL Tool

---

- An IDE for GraphQL
- Runs in the browser
  ..\* Has syntax highlighting, error reporting, automation and hinting...
