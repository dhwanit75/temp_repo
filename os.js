const os = require('os');

//info about curr user
const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currOS);