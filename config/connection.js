const mongoClient = require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=()=>{
    const url= "mongodb://localhost:27017"
    const dbname='cart'
     
    mongoClient.connect(url,(err,data)=>{
        if(err) throw err
        
        state.db=data.db(dbname)
        console.log("Database connected");
  
    })
}

module.exports.get=()=>{
   return state.db
}
