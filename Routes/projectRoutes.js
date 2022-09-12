var express = require("express");
var router = express.Router();
let controller = require("../Controller")

// let client = require("./dbConnect");​
// let projectCollection;​

// setTimeout(() => {​

//     projectCollection = client.MongoClient.db().collection("Feedbacks");​

// }, 2000)​

// const insertProjects = (project, callback) => {
//     projectCollection.insert(project,callback);
  
//   }
  
//   const getProjects = (callback) => {
//       projectCollection.find({}).toArray(callback);
    
//     }

router.get("/", (req, res) => {
  controller.projectController.retrieveProjects(req,res)
//     getProjects((err,result)=> {
//         if(err){
//             res.json({statusCode: 400, message: err})
//         }
//         else{
//             res.json({statusCode: 200, message: "Get Project Successful", data: result})
//         }
  
//   })
})

  
  router.post("/", (req, res) => {
    controller.projectController.createProjects(req,res)
//     console.log("New project added", req.body)
//     var newProject = req.body;
//     insertProjects(newProject,(err,result) => {
//       if(err) {
//         res.json({statusCode: 400, message: err})
//       }
//       else {
//         res.json({statusCode: 200, data: result, message:"Project successfully added"})
//       }
//     })
   })

   router.put("/", (req, res) => {
    controller.projectController.updateProjects(req, res)
   })

  //  router.delete("/", (req,res) => {
  //   controller.projectController.deleteProjects(res, req)
  //  })
   module.exports = router;