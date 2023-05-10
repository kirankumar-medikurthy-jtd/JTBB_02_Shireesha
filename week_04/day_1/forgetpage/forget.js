var signupdata=JSON.parse(localStorage.getItem("loginUser"));
if(signupdata){
location.href="../library/library.html"
}
else{
    let button=document.querySelector(".button");
        button.onclick=function(){
            let UserName=document.querySelector(".name").value;
            let password=document.querySelector(".password").value;
            let newPassword=document.querySelector(".confirm").value;
            let result=JSON.parse(localStorage.getItem("data")) || [];
            if(password===newPassword){
            let temp=[];
		    for(let i=0;i<result.length;i++){
		         
		    	if(UserName == result[i].UserName){
		    		if(password !== result[i].password){
		    			let  bag={
		    			   ...result,
		    			   password:newPassword
		    			}
		    		
		    		temp.push(bag);
		    	}
		    	}
		    	 else{
		    	 	temp.push(result[i]);
                        }	
		    
            }
            
		    localStorage.setItem("data" , JSON.stringify(temp));
		    alert("password is changed");
		    window.location.href="login.html"
            }
            else{
		   console.log(password,newPassword);
		   alert("failed");
            }
            }
        

}