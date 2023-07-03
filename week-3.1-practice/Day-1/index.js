const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { todo } = require("node:test");
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    let todoData = [];
    if (data) {
      todoData = JSON.parse(data);
    } else {
      todoData = [];
    }
    res.send(todoData);
  });
});

app.get("/todo/:id", (req, res) => {
  let currId = req.params.id;
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let todoData = [];
      if (data) {
        todoData = JSON.parse(data);
      } else {
        todoData = [];
      }
      console.log(todoData);
      console.log(currId);
      const isExist = todoData.find((todo) => todo.id === currId);
      if (isExist) {
        res.send(isExist);
      } else {
        res.status(404).send({ error: "The id does not exits." });
      }
    }
  });
});

app.post("/todos", (req, res) => {
  let newTask = {
    id: uuidv4(),
    title: req.body.title,
    discription: req.body.discription,
  };
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      return res.send({ error: err });
    }
    let todoData = [];
    if (data) {
      todoData = JSON.parse(data);
    } else {
      todoData = [];
    }
    todoData.push(newTask);
    fs.writeFile("data.json", JSON.stringify(todoData), (err) => {
      if (err) {
        throw err;
      }
      res.send("Successfully added to the database.");
    });
  });
});

app.put("/todos/:id", (req, res) => {
  let currId = req.params.id;
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: err });
    }
    let todoData = [];
    if (data) {
      todoData = JSON.parse(data);
    } else {
      todoData = [];
    }
    const isExist = todoData.find((todo) => todo.id === currId);
    if (isExist) {
      isExist.title = req.body.title;
      isExist.discription = req.body.discription;
      fs.writeFile("data.json", JSON.stringify(todoData), (err) => {
        if (err) {
          res.send({ error: err });
        }
        res.send("The data is successfully updated.");
      });
    } else {
      res.status(404).send("Todo not found.");
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  let currId = req.params.id;
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: err });
    }
    let todoData = [];
    if (data) {
      todoData = JSON.parse(data);
    }
    const isExist = todoData.find((todo) => todo.id === currId);
    if (isExist) {
      todoData = todoData.filter((todo) => todo != isExist);
      
      fs.writeFile('data.json',JSON.stringify(todoData),(err)=>{
        if(err){
            res.send({error:err});
        }
      })
      res.send(todoData);
    } else {
      res.send(404).send({ error: "Todo item with given id not found." });
    }
  });
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})

const port = 3000;
app.listen(port, () => {
  console.log(`The app is running at ${port}.`);
});
