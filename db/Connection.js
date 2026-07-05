const mongoose = require("mongoose");

const db = "mongodb://cw:cw1115@ac-rc3d0vl-shard-00-00.qgsacry.mongodb.net:27017,ac-rc3d0vl-shard-00-01.qgsacry.mongodb.net:27017,ac-rc3d0vl-shard-00-02.qgsacry.mongodb.net:27017/CW1?ssl=true&replicaSet=atlas-a03s5g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"


mongoose
  .connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(()=>console.log("Connection start"))
  .catch((error)=>console.log(error.message));