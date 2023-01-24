const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supervisorDetailSchema = new Schema({

    supervisor_name : {
        type : String,
        required : true
    },

    supervisor_email : {
        type : String,
        required : true
    },

    supervisor_faculty : {
        type : String,
        required : true
    },
    
    supervisor_research_area : {
        type : String,
        required : true
    },

})

const Supervisor = mongoose.model("Supervisor", supervisorDetailSchema);

module.exports = Supervisor;