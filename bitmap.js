const client = require('./client');

async function init() {
    await client.setbit('pings:2024-01-01-00:00', 123, 1)
    const getBit = await client.getbit("pings:2024-01-01-00:00", 123)
    const bitCount = await client.bitcount("pings:2024-01-01-00:00")  
    console.log(getBit)
    console.log(bitCount)
}
init();