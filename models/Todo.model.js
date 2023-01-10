const mongoose = require("mongoose")

const todoSchema=mongoose.Schema({
    id:Number,
    task:String,
    is_completed:Boolean
})

const TodoModel=mongoose.model("todo",todoSchema)

module.exports={
   TodoModel
}