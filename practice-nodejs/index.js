const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  var result1 = "The sum of 10 number are: "+sum(10);
  res.send(result1);
})

function sum(n){
    var result = 0;
    for(var i=1;i<=n;i++)
    {
        result+=i;
    }
    return result;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})