const express = require('express')
const router = express.Router()
const objectId = require('mongoose').Types.ObjectId
const Employee = require('./employee')


// Post Api
router.post('/',(req,res)=>{
    let emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        dept:req.body.dept
    })

    emp.save((err,doc)=>{
        if(err){
            console.log("Error in Post Data"+err)
        }
        else {
            res.send(doc)
        }
    })
})


// Get API

router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log("Error in Get Data"+err)
        }
        else {
            res.send(doc)
        }
    })
})


// get by postiion
router.get('/getbyposition/:position',(req,res)=>{
    
    Employee.find({position:req.params.position},(err,doc)=>{
        if(err){
            console.log("Error in Get Data"+err)
        }
        else {
            res.send(doc)
        }
    })
})


//Get single Employee by id
router.get('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log("Error in Get Data"+err)
            }
            else {
                res.send(doc)
            }
        })
    }
    else {
        return res.status(404).send(`No Record found with Id ${req.params.id}`)
    }
})

// Delete Api
router.delete('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log("Error in delete in "+err)
            }
            else {
                res.send("deleted successfully")
            }
    
        })
    }else{
        return res.status(404).send(`No Record found with Id ${req.params.id}`)
    }
})






// Update Api
router.put('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)){
        let emp = {
            name:req.body.name,
            position:req.body.position,
            dept:req.body.dept
        }

        Employee.findByIdAndUpdate(req.params.id,{$set:emp},(err,doc)=>{
            if(err){
                console.log("Error in updating in "+err)
            }
            else {
                res.send("Updated Successfully successfully")
            }
        })
    }
    else{
        return res.status(404).send("No record found")
    }   
})





// Delete Api by username
router.delete('/deletebyName/:name',(req,res)=>{
   
        Employee.deleteOne({name: req.params.name},(err,doc)=>{
            if(err){
                console.log("Error in delete in "+err)
            }
            else {
                res.send("deleted successfully")
            }
    
        })
    
})

module.exports = router