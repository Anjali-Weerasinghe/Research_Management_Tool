const router = require("express").Router();
const { response } = require("express");
let ResearchTopic = require("../Models/ResearchTopic");


router.route("/add").post((req, res) =>{
    
    const researchTitle = req.body.researchTitle;
    const research_category = req.body.research_category;
    const research_area =  req.body.research_area;
    const supervisor_name = req.body.supervisor_name;
    const co_supervisor_name = req.body.co_supervisor_name;
    const groupId = req.body.groupId;
    const member1 = req.body.member1;
    const leader_email = req.body.leader_email;
    const leader_phoneNumber = req.body.leader_phoneNumber;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const member4 = req.body.member4;
     

    const newResearchTopic = new ResearchTopic ({
        
        researchTitle,
        research_category,
        research_area,
        supervisor_name,
        co_supervisor_name, 
        groupId, 
        member1,
        leader_email, 
        leader_phoneNumber,
        member2, 
        member3,
        member4 
    
        
    })

    newResearchTopic.save().then(()=> {
        res.json("Research Topic Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    ResearchTopic.find().then((researchTopic)=>{
        res.json(researchTopic)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { researchTitle,
        research_category,
        research_area,
        supervisor_name,
        co_supervisor_name, 
        groupId, 
        member1,
        leader_email, 
        leader_phoneNumber,
        member2, 
        member3,
        member4 } = req.body;

    const updateResearchTopic = {
        researchTitle,
        research_category,
        research_area,
        supervisor_name,
        co_supervisor_name, 
        groupId, 
        member1,
        leader_email, 
        leader_phoneNumber,
        member2, 
        member3,
        member4 
    }

    const update = await ResearchTopic.findByIdAndUpdate(userId, updateResearchTopic).then(() => {

        res.status(200).send({status: "Research Topic Details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await ResearchTopic.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Research Topic Details Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  ResearchTopic Details!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const researchTopicdata = await ResearchTopic.findById(userId).then((researchTopic) => {
        res.status(200).send({status: "ResearchTopic details fetched", researchTopic});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;