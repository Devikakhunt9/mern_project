const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('./model/Employee');
const Machine = require('./model/Machine');
const cors = require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/companies').then(()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(cors())

    app.get('/all',async(req,res)=>{
        const data =  {Emp: await Employee.find(),Machine:await Machine.find()}
        res.send(data)
    });

    app.get('/emp',async(req,res)=>{
        const data = await Employee.find()
        res.send(data)
    });


    app.get('/machine',async(req,res)=>{
        const data = await Machine.find()
        res.send(data)
    });
    
    app.get('/emp/:id',async(req,res)=>{
        const data = await Employee.findOne({EId:req.params.id});
        res.send(data)
    });

    app.get('/machine/:id',async(req,res)=>{
        const data = await Machine.findOne({ID:req.params.id});
        res.send(data)
    });


    app.post('/emp',async(req,res)=>{
        const e = new Employee();
        e.EId = req.body.EI;
        e.EName = req.body.EN;
        const data = await e.save()
        res.send(data);
   
    });
    

    app.post('/machine',async(req,res)=>{
        console.log(req.body);
       const m = new Machine();
           m.ID = req.body.ID
           m.Name = req.body.Name
           m.Category = req.body.Category
           m.CuttingType = req.body.CuttingType
           m.Capacity = req.body.Capacity
           m.OPMode = req.body.OPMode
           m.EleConnection = req.body.EleConnection
           m.BodyFinish = req.body.BodyFinish
           m.MotorPower = req.body.MotorPower
           m.CuttingMethod = req.body.CuttingMethod
           m.Dimension = req.body.Dimension
           m.BladeSize = req.body.BladeSize
           m.MaxCuttingLength = req.body.MaxCuttingLength
           m.MaxCuttingThickness = req.body.MaxCuttingThickness
           m.Material = req.body.Material
           m.Prize = req.body.Prize
           m.Image = req.body.Image
           m.Video = req.body.Video
           console.log(m);
           const data = await m.save();
        res.send(data);
   
    });

    app.put('/emp/:id',async(req,res)=>{
        const data = await Employee.findOne({EId:req.params.id})
        data.EName = req.body.EN;
        await data.save();
        res.send(data);
    });


    app.put('/machine/:id',async(req,res)=>{
        const data = await Machine.findOne({ID:req.params.id});
        data.Name = req.body.Name
        data.Category = req.body.Category
        data.CuttingType = req.body.CuttingType
        data.Capacity = req.body.Capacity
        data.OPMode = req.body.OPMode
        data.EleConnection = req.body.EleConnection
        data.BodyFinish =req.body.BodyFinish
        data.MotorPower = req.body.MotorPower
        data.CuttingMethod = req.body.CuttingMethod
        data.Dimension = req.body.Dimension
        data.BladeSize = req.body.BladeSize
        data.MaxCuttingLength = req.body.MaxCuttingLength
        data.MaxCuttingThickness = req.body.MaxCuttingThickness
        data.Material = req.body.Material
        data.Prize = req.body.Prize
        data.Image = req.body.Image
        data.Video = req.body.Video
        await data.save()
        res.send(data);
   
    });


    app.delete('/emp/:id',async(req,res)=>{
        const data = await Employee.deleteOne({EId:req.params.id})
        res.send(data)
    });


    app.delete('/machine/:id',async(req,res)=>{
        const data = await Machine.deleteOne({ID:req.params.id})
        res.send(data)
    });


    app.listen(1111,()=>{
        console.log("@1111")
    })
})
