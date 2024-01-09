//os module-for interacting with operating system
const os=require('os') //built -in module

//info about current user
const user=os.userInfo()
console.log(user);

//returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} second`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem
}
console.log(currentOs)