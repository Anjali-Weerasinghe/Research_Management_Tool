const router = require("express").Router();
const { response } = require("express");
let Supervisor = require("../Models/SupervisorDetail");


router.route("/add").post((req, res) =>{
    
    const supervisor_name = req.body.supervisor_name;
    const supervisor_email = req.body.supervisor_email;
    const supervisor_faculty =  req.body.supervisor_faculty;
    const supervisor_research_area = req.body.supervisor_research_area;
     

    const newSupervisor = new Supervisor ({
        supervisor_name,
        supervisor_email,
        supervisor_faculty,
        supervisor_research_area,
        
    })

    newSupervisor.save().then(()=> {
        res.json("Supervisor Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    Supervisor.find().then((supervisor)=>{
        res.json(supervisor)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { supervisor_name, supervisor_email, supervisor_faculty, supervisor_research_area,} = req.body;

    const updateSupervisor = {
        supervisor_name,
        supervisor_email,
        supervisor_faculty,
        supervisor_research_area
    }

    const update = await Supervisor.findByIdAndUpdate(userId, updateSupervisor).then(() => {

        res.status(200).send({status: "Supervisor Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Supervisor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Supervisor Details Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Supervisor Details!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const supervisordata = await Supervisor.findById(userId).then((supervisor) => {
        res.status(200).send({status: "Supervisor details fetched", supervisor});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;