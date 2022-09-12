let client = require("../dbConnect");
let projectCollection;
// setTimeout(() => {                        
//     projectCollection = client.MongoClient.db().collection("Celebrities");
// }, 2000)


const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
      
      }
      
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
        
        }

const getProjectByID = (project, callback) => {
    projectCollection.find({projectID : id}).toArray (project, callback);
}



module.exports = {
    insertProjects, getProjects, getProjectByID
}