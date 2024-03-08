const client = require("./client");

//Basic Commands:-
// SADD adds a new member to a set.
// SREM removes the specified member from the set.
// SISMEMBER tests a string for set membership.
// SINTER returns the set of members that two or more sets have in common (i.e., the intersection).
// SCARD returns the size (a.k.a. cardinality) of a set.

async function init() {
  await client.sadd("ip", 1);
  await client.sadd("ip", 2);
  await client.sadd("ip", 3);
  await client.sadd("ip", 4);

  await client.sadd("id", 1);
  await client.sadd("id", 2);
  await client.sadd("id", 3);
  await client.sadd("id", 4);

  const result = await client.srem("ip", 3);

  const member = await client.sismember("ip", 1);

  const common = await client.sinter('ip', 'id')

  console.log("Removed ip is: ", result);
  console.log("Ismember : ", member);
  console.log(common);
}
init();
