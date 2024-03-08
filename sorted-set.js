const client = require("./client");

async function init() {
  const u1 = await client.zadd("position", 10, "saiman");
  const u2 = await client.zadd("position", 3, "keshav");
  const u3 = await client.zadd("position", 6, "dipak");
  const u4 = await client.zadd("position", 1, "shyam");

  const rankBies = await client.zrange("position", 0, -1);
  const rank = await client.zrank("position", "saiman");

  console.log(u1, u2, u3, u4);
  console.log(rankBies);
  console.log(rank);

}
init();
