const express = require("express")
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3001



app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.json())

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send("testing complete!")
    
})

app.listen(port,()=>{
    console.log('Server is running on port  '+port)
})