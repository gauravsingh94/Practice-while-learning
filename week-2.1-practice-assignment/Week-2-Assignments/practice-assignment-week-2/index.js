const express = require('express')
const app = express()

app.get('/:filename',(req,res)=>{
    const filename = req.params;
    console.log(filename);
})

app.listen(3001,()=>{
    console.log("Server is started running successufully")
})