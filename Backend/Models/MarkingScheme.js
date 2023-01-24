const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const markingSchema = new Schema({

    Name : {
        type : String,
        required : true
    },
    
    type : {
        type : String,
        required : true
    },

    marking_scheme : {
        type :String,
        required : true
    },

    mDate : {
        type :String,
        required : false
    },


   
    

})

//mongodb data table name
const Marking = mongoose.model("Marking", swapnaSchema);

//export the module
module.exports = Marking;