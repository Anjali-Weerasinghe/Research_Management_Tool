const router = require("express").Router();
const Conversation = require("../Models/Conversation");

//new conv
router.post("/", async(req,res)=>{
    const newConversation = new Conversation({
        members:[req.body.senderId, req.body.receiverId]
    });

    try{
        const savedCoversation =  await newConversation.save();
        res.status(200).json(savedCoversation);
    }catch(err){
        res.status(500).json(err)
    }
});

//get conv a user

router.get("/:userId", async (req,res)=>{
    try{
        const conversation = await Conversation.find({
            members:{ $in:[req.params.userId]},
        });
        res.status(200).json(conversation);
    }catch{
        res.status(500).json(err)
    }
});

router.get("/find/:firstUserId/:secondUserId", async (req,res)=>{
    try{
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId]},
        });
        res.status(200).json(conversation)
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;