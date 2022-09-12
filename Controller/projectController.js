// let client = require("../dbConnect");​
//     let projectCollection;​

//     setTimeout(() => {​

//         projectCollection = client.MongoClient.db().collection("Feedbacks");​
    
//     }, 2000)

let projectModel = require('../Model/project')

// const insertProjects = (project, callback) => {
//   projectCollection.insert(project,callback);

// }

// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
  
//   }

const createProjects = (req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
}

const retrieveProjects = (req, res) =>{
    projectModel.getProjects((err, result)=> {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message: "Success", data: result})
        }
    })
}

const updateProjects = (req, res) => {
    var updateValue = req.body;
 
    projectModel.getProjectByID((id,err) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            projectModel.insertProjects(updateValue, (err,result) => {
                if(err) {
                    res.json({statusCode: 400, message: err})
                }
                else {
                    res.json({statusCode: 200, message:"Project Successfully updated", data: result})
                }

            })
        }
    })
}

//const deleteProjects = ()

module.exports = {
    createProjects, retrieveProjects, updateProjects 
}
            
            