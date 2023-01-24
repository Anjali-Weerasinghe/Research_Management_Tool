const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : { type: String, required : true },
    passwordHash : {type:String, required : true}
});

const UserModel = mongoose.model("userModel",userSchema);

module.exports = UserModel;