module.exports ={//bu dosyanin import edilebilir oldugunu belirtir
    "PORT":process.env.PORT || "3000",
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug",//log level olarak basta yazdigimi al yoksa debug al dedik
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "mongodb://localhost:27017/node-project-base"
    //db olarak belirledigime baglan env icerisinden yoksa base olana baglan dedik burda da
}