const mongoose = require('mongoose')


const mnSchema = mongoose.Schema({
    ID:Number,
    Name:String,
    Category:String,
    CuttingType:String,
    Capacity:String,
    OPMode:String,
    EleConnection:String,
    BodyFinish:String,
    MotorPower:String,
    CuttingMethod:String,
    Dimension:String,
    BladeSize:String,
    MaxCuttingLength:String,
    MaxCuttingThickness:String,
    Material:String,
    Prize:Number,
    Image:String,
    Video:String
});

module.exports= mongoose.model("Machine",mnSchema);