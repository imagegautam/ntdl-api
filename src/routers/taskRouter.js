import express from 'express';
const router = express.Router();

import {idGenerator} from '../utils.js'
import { insertTask } from '../model/task/TaskModel.js';


let fakeDb = []

//controllers


//get data
router.get("/", (req, res) => {
    res.json({
        message: "Here are the task",
        data: fakeDb,
    });
});

//post data
router.post("/", async (req, res) => {

    try{
        const result = await insertTask(req.body);
        result?._id ?
        res.json({
            message: "New task has been added"
        }):
        res.json({
            message: "Failed to add new data"
        });

    }catch(error){
        console.log(error)
    }
    // const id = idGenerator();

    // fakeDb.push({...req.body, id});
    
});

//update task
router.patch("/", (req, res) =>{
    const {id, type} = req.body;
    console.log(id, type);
    fakeDb = fakeDb.map((item) =>{
        if(item.id === id){
            return {...item, type} //item.type == ""
        }

        return item
    })

    res.json({
        message: "Your task has been updated",
    });
});

//update task
router.delete("/", (req, res) =>{
    const {id, type} = req.body;
    console.log(id, type);
    fakeDb = fakeDb.filter(item=> item.id !=id) 

    res.json({
        message: "Your task has been delted",
    });
});


export default router;
