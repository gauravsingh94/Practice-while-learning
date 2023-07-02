const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

   //actually here we are defining express this middleware we are using.
function calculateSum(n){
  var sum = 0;
  for(var i=0;i<=n;i++)
  {
    sum+=i;
  }
  return sum;
}
function calculateMul(n){
  var mul=1;
  for(var i=1;i<=n;i++)
  {
    mul*=i;
  }
  return mul;
}

app.get('/sum',(req,res)=>{
  let counter = req.query.counter;
    let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateMul(counter);
  console.log(calculatedSum);
  console.log(calculatedMul);
  
  var answerObject= {
    sum:calculatedSum,
    multiplication:calculatedMul
  }
  res.status(200).send(answerObject);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})