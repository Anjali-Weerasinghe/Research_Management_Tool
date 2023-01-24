const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const researchTopicSchema = new Schema({

    researchTitle : {
        type : String,
        required : true
    },

    research_category : {
        type : String,
        required : false
    },
    
    research_area : {
        type : String,
        required : false
    },

    supervisor_name : {
        type :String,
        required : true
    },

    co_supervisor_name : {
        type :String,
        required : true
    },
    
    groupId : {
        type : String,
        required : true
    },

    member1 : {
        type : String,
        required : true
    },

    leader_email : {
        type : String,
        required : true
    },

    leader_phoneNumber : {
        type : String,
        required : true
    },

    member2 : {
        type : String,
        required : true
    },

    member3 : {
        type : String,
        required : true
    },

    member4 : {
        type : String,
        required : false
    },

})

const ResearchTopic = mongoose.model("ResearchTopic", researchTopicSchema);

module.exports = ResearchTopic;







