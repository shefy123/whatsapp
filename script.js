let friends = [
    {
        name : "shagufta Islam",
        massage : "hi how are you?",
        time : "yesterday",
        number :"<i class='fas fa-phone'></i>0345-66568864",
        email : "<i class='far fa-envelope'></i>shefy@gmail.com",
        title : "So many books,So little time",
        image : "img1.png",
        mesageinfo :"received"
        
},
{
    name : "sana",
    massage : "nobody is mad :P",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-74837864",
    email : "<i class='far fa-envelope'></i>sana@gmail.com",
    title : "Life without a Goals such a dream <i class='far fa-smile'></i>",
    image : "img2.png",
    mesageinfo :"not received"
    
},
{
    name : "uzma",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-63423864",
    email : "<i class='far fa-envelope'></i>uzma@gmail.com",
    title : "Climb the ladder to success escalator style",
    image : "img3.png",
    mesageinfo :""
},
{
    name : "sania",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-66555164",
    email : "<i class='far fa-envelope'></i>sania@gmail.com",
    title : "Words mean things",
    image : "img4.png",
    mesageinfo :"not received"
},
{
    name : "mehwish",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-65545454",
    email : "<i class='far fa-envelope'></i>mehwish@gmail.com",
    title : "Beautiful things don,t ask attention",
    image : "img5.png",
    mesageinfo :"received"
},
{
    name : "Anabia",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-60000544",
    email : "<i class='far fa-envelope'></i>anabia@gmail.com",
    title : "Die with memories not with dreams",
    image : "img6.png",
    mesageinfo :""
},
{
    name : "sobia",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0333-6454554",
    email : "<i class='far fa-envelope'></i>sobia@gmail.com",
    title : '"Well behaved Women rarely make history"',
    image : "img7.png",
    mesageinfo :"not received"
},
{
    name : "Taniya",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-6565657",
    email : "<i class='far fa-envelope'></i>tania@gmail.com",
    title : "so many books,so little time",
    image : "img8.png",
    mesageinfo :""
},
{
    name : "Anaya",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0335-2225657",
    email : "<i class='far fa-envelope'></i>anaya@gmail.com",
    title : "Die with memories not with dreams",
    image : "img9.png",
    mesageinfo :"received"
},
{
    name : "kanwal",
    massage : "hi how are you?",
    time : "yesterday",
    number :"<i class='fas fa-phone'></i>0345-95225155",
    email : "<i class='far fa-envelope'></i>kanwal@gmail.com",
    title : "Forgotten is Forgiven!!",
    image : "img10.png",
    mesageinfo :""
}
]

function initializer() {
    let tick='';
    console.log ("hellow frnds");
    let contactListEL = document.querySelector(".main");

    for ( let i = 0 ; i<friends.length; i ++) {
        
        if(friends[i].mesageinfo==="received"){
             tick="<i class='fas fa-check-double'></i>";
        }
        else if(friends[i].mesageinfo==="not received"){
             tick="<i class='fas fa-check'></i>";
        }
        else{
             tick="<i class='fas fa-clock'></i>";
        }

        contactListEL.innerHTML += `
      <section class="main" onclick="friendChange(${i})">
            <section class="person-item">
                <div class="image" style="background-image:url('images/${friends[i].image}')"
                ></div>
                <div class="name-time">
                 <div class="name-massege">
                    <p class="name">${friends[i].name}</p>   
                    <p class="msg">${tick}${friends[i].massage.slice(0, 80) + "..."}</p>
                 </div>   
                 <p class="time">${friends[i].time}</p>
                 </div>
            </section>
              </section>
 
     `
    }
}
function friendChange(friendIndex) {
    document.querySelector("#friends-details #sec-name").innerHTML = friends[friendIndex].name;
    document.querySelector("#friends-details #sec-title").innerHTML = friends[friendIndex].title;
    document.querySelector("#friends-details #sec-img").style["background-image"]=`url(images/${friends[friendIndex].image})`;
    document.querySelector("#friends-details #sec-email").innerHTML = friends[friendIndex].email;
    document.querySelector("#friends-details #sec-number").innerHTML = friends[friendIndex].number;
    document.querySelector("#friends-details #defult").style["display"] ="none";
}

