let button=document.querySelector(".btn");
button.onclick=function(){
    let search=document.querySelector(".input").value;
    
    if(search===""){
        alert("you write something");
    }else{
        let btn2=document.createElement("span");
        btn2.setAttribute("class","todo");
       
        let del=document.createElement("button");
        del.setAttribute("class","delete");
        del.innerHTML="DELETE";
        let div=document.createElement("div");
        // edit=document.createElement("Edit");
        // edit.setAttribute("class","edit");
        // del.innerHTML="EDIT";

        let display=document.querySelector(".display");
        display.append(btn2,del,div);
        btn2.append(search);

        del.onclick=function(){
            del.remove();
            btn2.remove();
        }

    }
}