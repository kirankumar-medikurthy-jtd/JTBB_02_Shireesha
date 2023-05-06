var result=JSON.parse(localStorage.getItem("signupdata")) || [];
var adminCode=JSON.parse(localStorage.getItem("AdminCode"))||[];


var btn=document.querySelector(".btn");
btn.onclick=function(){
// var name=document.querySelector(".name").value;
var password=document.querySelector(".password").value;
var user=document.querySelector(".user").value;
var adminCodeInput=document.querySelector(".admin").value;
var temp = false
if(result.name&&result.password==" "){
	alert("please enter details");
	return
}else{
	for(let i=0;i<result.length;i++){
		if(result[i].user===user&&result[i].password===password){
			temp=true
			if(adminCodeInput===""||adminCodeInput==adminCode){
				alert("login successfull");
				localStorage.setItem("loginUser",JSON.stringify({...result[i],admin:adminCodeInput===""? false:true}))
				window.location.href="../library/library.html";
				return
			}
			else{
				alert("wrong Admin code")
				return
			}
		}
	}
}
if(!temp) alert("wrong username and password");
}

