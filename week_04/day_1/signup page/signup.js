var btn=document.querySelector(".btn");
var result=JSON.parse(localStorage.getItem("signupdata")) || [];
var adminCode=JSON.parse(localStorage.getItem("AdminCode")) || " ";

btn.onclick=function(){
var name=document.querySelector(".name").value;
var user=document.querySelector(".user").value;
var email=document.querySelector(".email").value;
var password=document.querySelector(".password").value;
var admin=document.querySelector(".admin").value;

if(name !== "" && user !== "" && email !== "" && password !== ""){

for(let i=0; i<result.length; i++){
if(result[i].user === user){
alert("User already exist");
return;
}
}

if(admin === "" || admin === adminCode){
localStorage.setItem("signupdata",JSON.stringify([...result,{name,user,email,password,admin: (admin === "" ? false : true)}]));
localStorage.setItem("loginUser",JSON.stringify({name,user,email,password,admin: (admin === "" ? false : true)}));
console.log(localStorage.getItem("signupdata"));

alert("Account Created Successfully");
window.location.href = "../library/library.html"

}
else{
alert("Wrong Admin Code");
}
}else{
alert("Please enter all data")
}
}