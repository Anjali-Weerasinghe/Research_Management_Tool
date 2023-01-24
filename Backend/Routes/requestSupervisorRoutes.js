const router = require("express").Router();
const { response } = require("express");
let RequestSupervisor = require("../models/RequestSupervisor");

router.route("/add").post((req, res) => {



    const researchTopic = req.body.researchTopic;
    const research_area = req.body.research_area;
    const supervisor_name = req.body.supervisor_name;
    const Requestmessage = req.body.Requestmessage;
    const GroupLeader = req.body.GroupLeader;
    const GroupLeaderITnumber = req.body.GroupLeaderITnumber;
    const sdate = req.body.sdate;
    const approval = req.body.approval;
    
    const newRequestSupervisor = new RequestSupervisor({
        researchTopic,
        research_area,
        supervisor_name,
        Requestmessage,
        GroupLeader,
        GroupLeaderITnumber,
        sdate,
        approval
        
    })

    newRequestSupervisor.save().then(() => {
        res.json("supervisor request added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    RequestSupervisor.find().then((requestSupervisor) => {
        res.json(requestSupervisor)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {
        researchTopic,
        research_area,
        supervisor_name,
        Requestmessage,
        GroupLeader,
        GroupLeaderITnumber,
        sdate,
        approval
    } = req.body;

    const updaterequestSupervisor = {
        researchTopic,
        research_area,
        supervisor_name,
        Requestmessage,
        GroupLeader,
        GroupLeaderITnumber,
        sdate,
        approval
    }

    const update = await RequestSupervisor.findByIdAndUpdate(userId, updaterequestSupervisor).then(() => {
        res.status(200).send({status: "request data Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await RequestSupervisor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const requestSupervisordata = await RequestSupervisor.findById(userId).then((requestSupervisor) => {
        res.status(200).send({status: "fetched", requestSupervisor});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



// export the module
module.exports = router;