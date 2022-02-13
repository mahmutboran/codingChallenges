let text = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let span = document.getElementById("span");



btn.addEventListener("click",()=>{
    
    let textArray = [].slice.call(text.value.toLowerCase())
    count=0;
    
    span.setAttribute("class","style1")
    
    textArray.forEach(e => {

        "aeuoüiöı".includes(e) ? count+=1:"continue";
    });
    result.innerHTML=`There are ${count} vowels in `
    span.innerHTML=text.value
})