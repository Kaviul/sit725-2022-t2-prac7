//const { response } = require("express")

const getProjects = ()=> {
    $.get('/api/projects', (response) => {
        if(response.statusCode == 200){
            addCards(response.data);
        }
    })
}


const cardList = [
    {
        title: "Keira Knightley",
        image: "images/kk1.jpg",
        link: "About Keira",
        desciption: "Demo"
    },
    {
        title: "Olivia Wilde",
        image: "images/od.jpg",
        link: "About Olivia",
        desciption: "Demo"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+ '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link= $('#link').val();
    formData.description = $('#description').val();
    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);

}

const addProjectToApp = (project) =>{
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}

let socket = io();
socket.on('number', (msg) => {
    $("#heading").html("Welcome to my page! "+ msg)
})

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
        
    })
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getProjects();   
   $('.modal').modal();
  });