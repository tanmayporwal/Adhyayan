const express = require("express")
const cors = require('cors');
require("./db/mdb.js")
const User = require("./db/models/userModel")


const app = express()
const port = process.env.PORT || 3001



app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
app.use(express.json())


//Much Modification Required
app.post('/user',(req,res)=>{
  const new_user = new User(req.body)
  new_user.save().then(()=>{
    res.status(201).send("Succesfully created new user.")
  }).catch((error)=>{
    res.status(406).send(error._message)
  })
})

//For Reference
// app.<method>('<path>/:id',(req,res)=>{
//   const _id = req.params.id
//   To access dynamic parameters for url of request
// })



app.listen(port,()=>{
    console.log('Server is running on port  '+port)
})