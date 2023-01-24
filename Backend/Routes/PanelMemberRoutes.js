const router = require("express").Router();
const { response } = require("express");
let PanelMembers = require("../models/PanelMembers");

router.route("/add").post((req, res) => {



    const Group_Id = req.body.Group_Id;
    const panelmember1 = req.body.panelmember1;
    const panelmember2 = req.body.panelmember2;
    const panelmember3 = req.body.panelmember3;
    const panelmember4 = req.body.panelmember4;
    
    const newPanelMembers = new PanelMembers({
        Group_Id,
        panelmember1,
        panelmember2,
        panelmember3,
        panelmember4
        
    })

    newPanelMembers.save().then(() => {
        res.json("supervisor request added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    PanelMembers.find().then((panelMembers) => {
        res.json(panelMembers)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {
        Group_Id,
        panelmember1,
        panelmember2,
        panelmember3,
        panelmember4,
    } = req.body;

    const updatepanelMembers = {
        Group_Id,
        panelmember1,
        panelmember2,
        panelmember3,
        panelmember4
    }

    const update = await PanelMembers.findByIdAndUpdate(userId, updatepanelMembers).then(() => {
        res.status(200).send({status: "request data Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await PanelMembers.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const panelMembersdata = await PanelMembers.findById(userId).then((panelMembers) => {
        res.status(200).send({status: "fetched", panelMembers});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



// export the module
module.exports = router;