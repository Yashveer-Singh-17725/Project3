let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click",function(){

    if(div.style.backgroundColor == "red"){
        div.style.backgroundColor = "blue";
    }else{
        div.style.backgroundColor = "red";
    }

})

