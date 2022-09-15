import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";

const app = express();
const PORT = 8082;

//rutas
app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});


app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}...😃🛩️🛩️🛩️`);
});
