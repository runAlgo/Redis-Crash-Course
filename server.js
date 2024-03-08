const express = require("express");
const axios = require("axios");
const app = express();
const client = require("./client");

app.get("/", async (req, res) => {
  const cachedValue = await client.get("users");
  if (cachedValue) return res.json(JSON.parse(cachedValue));

  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  await client.set("users", JSON.stringify(data));
  await client.expire("users", 15);
  return res.json(data);
});

app.listen(9000, () => console.log("Server is Started at 9000"));
