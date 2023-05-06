let button=document.querySelector(".button");
button.onclick=function(){
    let name=document.querySelector(".name").value;
    let author=document.querySelector(".author").value;
    let year=document.querySelector(".year").value;
    let publish=document.querySelector(".publish").value;
    let book=document.querySelector(".book").value;
    let prize=document.querySelector(".prize").value;
    let ratings=document.querySelector(".ratings").value;
    console.log(name,author,year,publish,book,prize,ratings);

    var result=JSON.parse(localStorage.getItem("data"))||[];
    localStorage.setItem("data",JSON.stringify([...result,{name,author,year,publish,book,prize,ratings}]));
    console.log(localStorage.getItem("data"));

}