const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    EId:Number,
    EName:String
});



module.exports = mongoose.model("Employee",empSchema);