const express= require("express")
const {TodoModel}=require("../models/Todo.model")
const todoRouter=express.Router()

todoRouter.get("/",async (req,res)=>{
    let query=req.query
    try{
        const todos=await TodoModel.find(query)
        res.send(todos)
    }
    catch(err)
    {
       console.log(err)
       res.send({"err":"Something went wrong"})
    }
})

todoRouter.patch("/edit/:id",async (req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
      await TodoModel.findByIdAndUpdate({_id:ID},payload)
      res.send(`update the todo data whose id is ${ID} `)
    }
    catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

todoRouter.delete("/delete/:id", async (req,res)=>{
    const ID=req.params.id
    try{
        await TodoModel.findByIdAndDelete({_id:ID})
        res.send(`Deleted the todo data whose id is ${ID} `)
      }
      catch(err){
          console.log(err)
          res.send({"err":"Something went wrong"})
      }
})

todoRouter.post("/add", async (req,res)=>{
     const data=req.body
     try{
        const todo=new TodoModel(data)
        await todo.save()
        console.log(todo);
        res.send("Added the todo")
     }
     catch(err){
       console.log(err)
       res.send({"err":"Something went wrong"})
     }
 
})

module.exports={
    todoRouter
}