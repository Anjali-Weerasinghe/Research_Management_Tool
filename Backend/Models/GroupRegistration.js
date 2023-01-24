const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroupRegisterSchema = new Schema({

    member1Name : {
        type : String,
        required : true
    },

    member2Name : {
        type : String,
        required : true
    },

    member3Name : {
        type : String,
        required : true
    },

    member4Name : {
        type : String
    },

    member1email : {
        type : String,
        required : true
    },

    member2email : {
        type : String,
        required : true
    },

    member3email : {
        type : String,
        required : true
    },

    member4email : {
        type : String
    },

    member1phoneNumber : {
        type : String
    },

    member2phoneNumber : {
        type : String
    },

    member3phoneNumber : {
        type : String
    },

    member4phoneNumber : {
        type : String
    },

    member1ITnumber : {
        type : String
    },

    member2ITnumber : {
        type : String,
        required : true
    },

    member3ITnumber : {
        type : String,
        required : true
    },

    member4ITnumber : {
        type : String
    },

    GroupID : {
        type : String
    },

    
})

const GroupRegister = mongoose.model("GroupRegister", GroupRegisterSchema);

module.exports = GroupRegister;