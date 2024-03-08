const client = require("./client");

async function init() {
    const data = await client.geoadd('bikes:rentable', -122.27653, 37.34456, 'station:1');
    const res2 = await client.geoadd('bikes:rentable', -122.2674626, 37.8062344, 'station:2');
    const res3 = await client.geoadd('bikes:rentable', -122.2469854, 37.8104049, 'station:3');

    const loc = await client.geoadd('bikes:rentable', -122.27652, 37.805186, 'station:1');
    const loc2 = await client.geoadd('bikes:rentable', -122.2674626, 37.8062344, 'station:1');
    const loc3 = await client.geoadd('bikes:rentable', -122.2469854, 37.8104049, 'station:1');

    console.log(res3);
    console.log(res2);
    console.log(data);

    console.log(loc);
    console.log(loc2);
    console.log(loc3);
}

init();
