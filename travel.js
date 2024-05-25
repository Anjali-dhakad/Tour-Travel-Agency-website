let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");
let placeName=document.getElementById("placeName")
let submit=document.getElementById("submit");

user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})
loginBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value == "" && pass.value ==""){
        alert("please fill details")
    }else{
        alert("You logged in")
        document.querySelector(".loginPage").style.display="none"
    }
})
submit.addEventListener("click",function(){
    if(placeName.value =="")
    {
    alert("Fill form")
    }else{
        alert(placeName.value + "Tour booked")
    }
})