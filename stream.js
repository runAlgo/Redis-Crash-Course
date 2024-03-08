const client = require("./client");

async function init() {
   const data = await client.xadd('race:france', '*', 'rider', 'Castilla', 'speed', '30.2', 'position', '1', 'location_id', '1')
   const data2 = await client.xadd('race:france', "*", "rider", "Norem ", "speed", "28.8", "position", "3", "location_id", "1")
   const range = await client.xrange("race:france", "1692632086370-0", "+", "COUNT", "2")
   const block = await client.xread("COUNT", "100", "BLOCK", "3000", "STREAMS", "race:france", "$")
   console.log(data);
   console.log(data2);
   console.log(range);
   console.log(block);
}
init();