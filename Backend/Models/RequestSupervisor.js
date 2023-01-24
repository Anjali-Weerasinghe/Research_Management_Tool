const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSupervisorSchema = new Schema({

    researchTopic : {
        type : String,
        required : true
    },
    
    research_area : {
        type : String,
        required : true
    },

    supervisor_name : {
        type :String,
        required : true
    },

    Requestmessage : {
        type :String,
        required : true
    },

    GroupLeader : {
        type :String,
        required : true
    },

    GroupLeaderITnumber : {
        type :String,
        required : true
    },

    sdate:{
        type :String,
        required : true
    },

    approval:{
        type :String,
        required : false
    }

   
    

})

//mongodb data table name
const RequestSupervisor = mongoose.model("RequestSupervisor", requestSupervisorSchema);

//export the module
module.exports = RequestSupervisor;