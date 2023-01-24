const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema({

    Group_Id : {
        type : String,
        required : true
    },
    
    panelmember1 : {
        type : String,
        required : true
    },

    panelmember2 : {
        type :String,
        required : true
    },

    panelmember3 : {
        type :String,
        required : false
    },

    panelmember4 : {
        type :String,
        required : false
    }

   
    

})

//mongodb data table name
const Panel = mongoose.model("Panel", panelSchema);

//export the module
module.exports = Panel;