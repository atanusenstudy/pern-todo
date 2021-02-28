const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db.js");

// middle ware
app.use(cors());
app.use(express.json()); 

//routes

//create todo
app.post("/todos",async(req,res)=>{
    try{
        //console.log(req.body);
        const{description}=req.body;
        const newTodo =await pool.query("INSERT INTO todo(description) values($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

//get all todo
app.get("/todos",async(req,res)=>{
    try{
        const allTodos =await pool.query("select * from todo");
        res.json(allTodos.rows);

    }catch(err){
        console.error(err.message);
    }
});
//get a todo

app.get("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const todo =await pool.query("select * from todo where todo_id = $1",[id]);
        res.json(todo.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

//updatw todo
app.put("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const{description} = req.body;
        const updateTodo =await pool.query(
            `UPDATE todo SET description = $1 where todo_id=$2 `,
            [description , id]);
        res.json("TodoUpdated");

    }catch(err){
        console.error(err.message);
    }
});

//delete todo
app.delete("/todos/:id", async(req,res)=>{
    const {id}=req.params;
    const deleteTodo = await pool.query("delete from todo where todo_id=$1",[id]);
    res.json("deleted");
})

app.listen(5000,()=>{
    console.log("server running 5000");
});