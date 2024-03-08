const client = require("./client")

async function init() {
    // await client.mset(['msg:6', 'Hey from Nodejs', 'msg:7', 'Me from Aasman Nodejs']);
    await client.expire("msg:4", 15);
    const user = await client.mget('msg:4');
    console.log(user);
    
}
init();
