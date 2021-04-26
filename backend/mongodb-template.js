const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
// create a client 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Adhyayan'

MongoClient.connect(connectionURL,{useNewUrlParser: true,  useUnifiedTopology: true}, (error,client)=>{
    if(error){
        return console.log("Unable to connect to db")
    }

    const dbref = client.db(databaseName) //gives database reference
    dbref.collection('users').insertOne({
        name: "Tanmay",
        age: 23
    },(error,res)=>{
        if(error){
            return console.log("Something went wrong")
        }

        console.log(res.ops)
    }
    )

    console.log("Connection Successful")
})

