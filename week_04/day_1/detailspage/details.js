
let bookdisplay=document.querySelector(".bookdisplay");
let result=JSON.parse(localStorage.getItem("book"));
let totalData=JSON.parse(localStorage.getItem("bookDetails"));
if(result){
        let name = document.createElement("h2");
        name.textContent =  "BookName:"+result.name;
        name.style.marginLeft="35%";
        name.setAttribute("id", "name");
        //name.style.marginTop="200px";

        let author = document.createElement("h3");
        author.textContent = "Author:"+result.authour;
        author.style.marginLeft="35%";
        author.setAttribute("id", "author");
       

        let year=document.createElement("h3");
        year.textContent="Year:"+result.year;
        year.style.marginLeft="35%";
        year.setAttribute("id", "year");

        let type=document.createElement("h3");
        type.textContent="Type:"+result.type;
        type.style.marginLeft="35%";
        type.setAttribute("id", "type");



        let publisher=document.createElement("h3");
        publisher.textContent="Publisher:"+result.publisher;
        publisher.style.marginLeft="35%";
        publisher.setAttribute("id", "publisher");


        let rate = document.createElement("h3");
        rate.textContent = "rate : " + result.rate;
        rate.style.marginLeft="35%";
        rate.setAttribute("id", "rate");


    
        let avatar = document.createElement("img");
        avatar.setAttribute("src", result.avatar);
        avatar.style.marginLeft="35%";
        avatar.style.marginTop="70px";
        avatar.setAttribute("id", "avatar");

        let element=document.createElement("button");
        element.textContent="DELETE";
        element.style.padding="10px 80px"
        element.style.marginTop="-20px";
        bookdisplay.append(avatar,name,author,year,type,publisher,rate,element)
       
        element.onclick = function(){
            let dub = []
           for(let i=0; i<totalData.length; i++){
            if(result.serial_number != totalData[i].serial_number){
                dub.push(totalData[i])
            }else{
                console.log(totalData[i], result)
            }
           }
           localStorage.removeItem("book")
           localStorage.setItem("bookDetails", JSON.stringify(dub))
           alert("Succussfully deleted!")
            window.location.href="../Viewpage/view.html";
        }
       
   

        
        let edit=document.createElement("button");
        edit.textContent="EDIT";
        edit.style.padding="10px 80px"
        edit.style.backgroundColor="pink";
        edit.style.marginLeft="300px";
        edit.style.marginTop="50px";
        edit.onclick=function(){
              bookdisplay.innerHTML="";

        let namediv=document.createElement("div")
        let nameinput=document.createElement("input");
        nameinput.setAttribute("type","text");
        nameinput.setAttribute("value",result.name);
        nameinput.setAttribute("class","Name");
        namediv.appendChild(nameinput)
        namediv.style.marginLeft="150px"

        let authordiv=document.createElement("div")
        let authorinput=document.createElement("input");
        authorinput.setAttribute("type","text");
        authorinput.setAttribute("value",result.authour);
        authorinput.setAttribute("class","Author");
        authordiv.appendChild(authorinput)
        authordiv.style.marginLeft="150px"
            
        let yeardiv=document.createElement("div")
        let yearinput=document.createElement("input");
        yearinput.setAttribute("type","text");
        yearinput.setAttribute("value",result.year);
        yearinput.setAttribute("class","Year");
        yeardiv.appendChild(yearinput) 
        yeardiv.style.marginLeft="150px"

        let publisherdiv =document.createElement("div")
        let publisherinput=document.createElement("input");
        publisherinput.setAttribute("type","text");
        publisherinput.setAttribute("value",result.publisher);
        publisherinput.setAttribute("class","Publisher");
        publisherdiv.appendChild(publisherinput)
        publisherdiv.style.marginLeft="150px"
        

        let typediv =document.createElement("div")
        let typeinput=document.createElement("input");
        typeinput.setAttribute("type","text");
        typeinput.setAttribute("value",result.type);
        typeinput.setAttribute("class","Type");
        typediv.appendChild(typeinput)
        typediv.style.marginLeft="150px"
            

        let ratediv=document.createElement("div")
        let rateinput=document.createElement("input");
        rateinput.setAttribute("type","text");
        rateinput.setAttribute("value",result.rate);
        rateinput.setAttribute("class","Rate");
        ratediv.appendChild(rateinput)
        ratediv.style.marginLeft="150px"
            
         
         let done=document.createElement("button");
         done.textContent="Done";
         done.setAttribute("class","btn");
         done.style.padding="10px 80px"
         done.style.marginLeft="150px";
         done.onclick=function(){
        var Name=document.querySelector(".Name").value;
        var Author=document.querySelector(".Author").value;
        var Year=document.querySelector(".Year").value;
        var Publisher=document.querySelector(".Publisher").value;
        var Type=document.querySelector(".Type").value;
        var Rate=document.querySelector(".Rate").value;
        let obj = {Name,Author,Year,Publisher,Type,Rate}

        localStorage.setItem("book",JSON.stringify({...result,...obj}))
         let arr=[];
         for(i=0;i<totalData.length;i++){
            if(totalData[i].serial_number===result.serial_number){
                arr.push({...result,...obj})
            }else{
                arr.push(totalData[i]);
            }
            
         }
         alert("successfull");
         location.setItem("bookDetails",JSON.stringify(arr))
         window.location.href="../detailspage/details.html";
        



        }
        bookdisplay.append(avatar,namediv,authordiv, yeardiv,publisherdiv,typediv,ratediv,done)
            
        }
                

        bookdisplay.append(avatar,name,author,year,type,publisher,rate,edit,element);
}else{
    window.location.href="../Viewpage/view.html";
}