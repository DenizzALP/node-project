const mongoose= require("mongoose");
const { options } = require("../routes");

let instance = null;

class Database {
    constructor (){
        if(!instance){
            this.mongoConnection = null;
            instance = this;
        }
        
        return instance


    }

    async connect(options){
        try{
            console.log("DB connecting...")
            let db = await mongoose.connect(options.CONNECTION_STRING)
            // let db = await mongoose.connect(options.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology:true})
            this.mongoConnection = db;
            console.log("DB connected.")
        }catch(err){
            console.error(err);
            process.exit(1)
        }

    }
}

module.exports = Database;