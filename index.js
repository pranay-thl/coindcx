const axios = require('axios');
const PUBLIC_ENDPOINT = 'https://public.coindcx.com';
async function getTicker(n=10) {
    var tickerRes = await axios.get(PUBLIC_ENDPOINT+'/exchange/ticker');
    return tickerRes.data.slice(0,n);
}

module.exports = {
    getTicker
}