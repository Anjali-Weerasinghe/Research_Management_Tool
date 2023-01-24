const router = require("express").Router();
const { response } = require("express");
let CoSupRequset = require("../Models/CoSupRequest");


router.route("/add").post((req, res) =>{

    
    
    const Cosupervisor_name = req.body.Cosupervisor_name;
    const groupId = req.body.groupId;
    const supervisor_name = req.body.supervisor_name;
    const researchTopic =  req.body.researchTopic;
    const research_area = req.body.research_area;
    const description = req.body.description;
    const approval = req.body.approval;
     

    const newCoSupRequset = new CoSupRequset ({
        Cosupervisor_name,
        groupId,
        supervisor_name,
        researchTopic, 
        research_area,
        description,
        approval,
        
    })

    newCoSupRequset.save().then(()=> {
        res.json("Co-Supervisor Request Successfully Submitted")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    CoSupRequset.find().then((coSupRequset)=>{
        res.json(coSupRequset)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { Cosupervisor_name,
            groupId,
            supervisor_name,
            researchTopic, 
            research_area,
            description,
            approval} = req.body;

    const updateCoSupRequset = {
            Cosupervisor_name,
            groupId,
            supervisor_name,
            researchTopic, 
            research_area,
            description,
            approval
    }

    const update = await CoSupRequset.findByIdAndUpdate(userId, updateCoSupRequset).then(() => {

        res.status(200).send({status: "CoSupervisor Requset Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await CoSupRequset.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "CoSupervisor Requset Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Supervisor Details!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const coSupRequsetdata = await CoSupRequset.findById(userId).then((coSupRequset) => {
        res.status(200).send({status: "Supervisor details fetched", coSupRequset});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;