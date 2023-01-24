const router = require("express").Router();
const { response } = require("express");
let GroupDetail = require("../models/GroupRegistration");

router.route("/add").post((req, res) => {



    const member1Name = req.body.member1Name;
    const member2Name = req.body.member2Name;
    const member3Name= req.body.member3Name;
    const member4Name = req.body.member4Name;
    const member1email = req.body.member1email;
    const member2email = req.body.member2email;
    const member3email= req.body.member3email;
    const member4email = req.body.member4email;
    const member1phoneNumber = req.body.member1phoneNumber;
    const member2phoneNumber = req.body.member2phoneNumber;
    const member3phoneNumber= req.body.member3phoneNumber;
    const member4phoneNumber = req.body.member4phoneNumber;
    const member1ITnumber = req.body.member1ITnumber;
    const member2ITnumber = req.body.member2ITnumber;
    const member3ITnumber= req.body.member3ITnumber;
    const member4ITnumber = req.body.member4ITnumber;
    const GroupID = req.body.GroupID;
    

    const newGroupDetails = new GroupDetail({
        member1Name,
        member2Name,
        member3Name,
        member4Name,
        member1email,
        member2email,
        member3email,
        member4email,
        member1phoneNumber,
        member2phoneNumber,
        member3phoneNumber,
        member4phoneNumber,
        member1ITnumber,
        member2ITnumber,
        member3ITnumber,
        member4ITnumber,
        GroupID
        
    })

    newGroupDetails.save().then(() => {
        res.json("Group Details added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    GroupDetail.find().then((groupDetail) => {
        res.json(groupDetail)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {
        member1Name,
        member2Name,
        member3Name,
        member4Name,
        member1email,
        member2email,
        member3email,
        member4email,
        member1phoneNumber,
        member2phoneNumber,
        member3phoneNumber,
        member4phoneNumber,
        member1ITnumber,
        member2ITnumber,
        member3ITnumber,
        member4ITnumber,
        GroupID
    } = req.body;

    const updateGroupDetail = {
        member1Name,
        member2Name,
        member3Name,
        member4Name,
        member1email,
        member2email,
        member3email,
        member4email,
        member1phoneNumber,
        member2phoneNumber,
        member3phoneNumber,
        member4phoneNumber,
        member1ITnumber,
        member2ITnumber,
        member3ITnumber,
        member4ITnumber,
        GroupID
    }

    const update = await GroupDetail.findByIdAndUpdate(userId, updateGroupDetail).then(() => {
        res.status(200).send({status: "Group details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await GroupDetail.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const GroupDetaildata = await GroupDetail.findById(userId).then((groupDetail) => {
        res.status(200).send({status: "fetched", groupDetail});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})


// export the module
module.exports = router;