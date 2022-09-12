require('dotenv').config()

var express = require("express")
var app = express()
var cors = require("cors")

//let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./Routes/projectRoutes");
let userRoutes = require("./Routes/userRoutes");
let http = require("http").createServer(app);
let io = require("socket.io")(http);



app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes)

//const MongoClient = require('mongoDb').MongoClient; 

//const uri = "mongodb+srv://kaviuln1:kaviuln@kncluster-1.ieurp6n.mongodb.net/?retryWrites=true&w=majority"
//const client = new MongoClient(uri, {useNewUrlParser: true});

// const insertProjects = (project, callback) => {
//   projectCollection.insert(project,callback);

// }

// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
  
//   }

//const createCollection = (collectionName) => {
   // client.connect((err,db) => {
     //   projectCollection = client.db().collection(collectionName);
       // if(!err) {
        //    console.log('Database MongoDb Connected!')
       // }
       // else{
        //    console.log("No DB connected, err: ", err);
          //  process.exit(1);
        //}
    //})
//}

// app.get("/projects", (req, res) => {
//     getProjects((err,result)=> {
//         if(err){
//             res.json({statusCode: 400, message: err})
//         }
//         else{
//             res.json({statusCode: 200, message: "Get Project Successful", data: result})
//         }
    
//   })
// })
  
//   app.post("/projects", (req, res) => {
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
//   })

io.on('connection', (socket) => {
  console.log('a user is connected at: ', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(() =>{
    socket.emit('number', new Date().toISOString());
  }, 1000);

  setInterval(() => {
    socket.emit('random_number', parseInt(Math.random()*10));
  }, 3000);
});


var port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/Prac7_index.html');
})

http.listen(port,()=>{
    console.log("Listening on: ", port)
    //createCollection("Celebrities")
})