const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestCoSupervisorSchema = new Schema({

    Cosupervisor_name : {
        type :String,
        required : true
    },
    
    groupId : {
        type :String,
        required : true
    },

    supervisor_name : {
        type :String,
        required : true
    },

    researchTopic : {
        type : String,
        required : true
    },
    
    research_area : {
        type : String,
        required : true
    },

    description : {
        type :String,
        required : true
    },


    approval:{
        type :String,
        required : false
    }

   

})

//mongodb data table name
const RequestCoSupervisor = mongoose.model("RequestCoSupervisor", requestCoSupervisorSchema);

//export the module
module.exports = RequestCoSupervisor;