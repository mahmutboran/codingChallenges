let text = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result")


btn.addEventListener("click",()=>{
    let pResult = "";
    let arraytext= text.value.split(" ");

    for (let i = 0; i < arraytext.length; i++) {
        
        pResult+=arraytext[i].charAt(0).toUpperCase()+arraytext[i].slice(1)+" "
    }
    result.innerHTML=pResult

})