const os = require("os");

console.log("Platform :", os.platform());
console.log("CPU :", os.arch());
console.log("Hostname :", os.hostname());
console.log("Home Directory :", os.homedir());
console.log("RAM :", os.totalmem());
console.log("Free RAM :", os.freemem());
console.log("User :", os.userInfo());