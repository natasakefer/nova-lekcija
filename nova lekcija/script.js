//call back functions

/*let da = function () {
    console.log("uspeo si")
}

let ne = function () {
    console.log("nisi uspeo")
}
*/
/*
let provera = function (yes, no, broj) {
    if (broj % 2 == 0) {
        yes();
    } else {
        no();
    }
}
*/
//provera(da, ne, 11);

// arrow functions
/*
setTimeout(()=>console.log("prosao dve sekunde"),2000)

provera(
    () =>console.log("uspeo si"),
    () =>console.log("nisi uspeo"),
    12
);
*/
/*
arr = ["petar", "marko"]
let ispis = ""

let addListItem = () => {
    setTimeout(() => {
        for (let key of arr) {
            ispis += "<li>" + key + "</li>"
        }

        document.body.innerHTML = ispis;
    }, 2000)
}
*/
/*let anotherItem=()=>{
    setTimeout(()=>{
    ispis += "<li>" + "nikola" + "</li>";
    },3000)
}*/

/*
let anotherItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ispis += "<li>" + "nikola" + "</li>";
        }, 3000)
    })
}
*/
/*
let cekaj = (resolve, reject) => {
    setTimeout(() => {
        ispis += "<li>" + "nikola" + "</li>";
        resolve()
    }, 3000)
}
*/
/*
let cekaj = (resolve, reject) => {
    setTimeout(() => {
        ispis += "<li>" + "nikola" + "</li>";
        
        let error = true;
        if(error=false)
         resolve();
         else
         reject("desilo se nesto lose");
    }, 3000)
}

let addItemPromise = new Promise(cekaj)

addItemPromise.then(addListItem).catch((err)=>console.log(err))
*/

//fetch
/*
fetch("users.json").then((response) => response.json())
       .then((user)=>{
        let info="";
        info+="<p>name:"+ user.name+ "</p>"
        info+="<p>email:"+user.email+"</p>"
        info+=`<img src="`+user.profilePicture+` "height="200">`
        document.body.innerHTML=info
       })
*/
/*
let addNewElement = function (info) {
    let newDiv = document.createElement(`div`);
    let img = document.createElement(`img`);
    let name = document.createElement(`p`);
    let email = document.createElement(`p`)
    let nameNode = document.createTextNode(info.name);
    let emailNode = document.createTextNode(info.email);
    name.appendChild(nameNode);
    email.appendChild(emailNode);
    newDiv.appendChild(name);
    newDiv.appendChild(email);

    document.body.appendChild(newDiv)
}

fetch("users.json").then((response) => response.json())
    .then((users) => {
        for (let user of users)
            addNewElement(user);
    })
*/
/*
fetch("users.json").then((response) => response.json())
    .then((users) => {
        let info = "";
        for (let user of users) {
            info += "<p>name:" + user.name + "</p>"
            info += "<p>email:" + user.email + "</p>"
            info += `<img src="` + user.profilePicture + ` "height="200">`
        }
        document.body.innerHTML = info
    })
*/

let createProfile = function (user) {
    let newDiv = document.createElement(`div`);
    let profilePic = document.createElement(`img`);
    let ul = document.createElement(`ul`);
    let nameLi = document.createElement(`li`);
    let emailLi = document.createElement(`li`);

    let nameTxt = document.createTextNode(user.name);
    let emailTxt = document.createTextNode(user.email);

    profilePic.src = user.profilePicture;

    nameLi.appendChild(nameTxt);
    emailLi.appendChild(emailTxt);

    ul.appendChild(nameLi);
    ul.appendChild(emailLi);

    newDiv.appendChild(profilePic);
    newDiv.appendChild(ul);

    newDiv.classList.toggle(`user`);
    let content = document.getElementById(`content`);

    content.appendChild(newDiv);
}

let createElementFromJson = function (users) {
    for (let user of users) {

        createProfile(user)
    }
}

fetch(`users.json`).then((response) => response.json()).then((data) => createElementFromJson(data));

