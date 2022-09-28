const { MongoClient } = require("mongodb");

class mongoDB {
    static connect = async (uri) =>{
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = mongoDB;