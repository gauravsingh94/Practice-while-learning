const express = require('express');
const bodyParser = require('body-parser');
const {v4:uuidv4}=require('uuid');
const cors = require('cors');


const app = express();

app.use(cors());    // Middleware
app.use(bodyParser.json());

let todoData = [];

app.get('/todos',(req,res)=>{
  res.send(todoData);
})



app.post('/todos',(req,res)=>{
  let newtitle = req.body.title;
  let newdescription = req.body.description;
  let newTask = {
    id: uuidv4(),
    title: newtitle,
    description: newdescription
  }
  todoData.push(newTask);
  res.send("successfully added to the database.");
})



app.delete('/todos/:id',(req,res)=>{
  let currId = req.params.id;
  const isExist = todoData.find(todo=>todo.id===currId);
  if(isExist){
    todoData=todoData.filter(todo=>todo!=isExist);

    res.send(todoData);
  }
  else{
    res.send(404).send({error:"Todo item with given id not found."});
  }
})

const port = 3000;
app.listen(port,()=>{
  console.log(`The app is running at ${port}.`);
})

