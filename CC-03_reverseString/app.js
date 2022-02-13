let text = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");


// first method `for`
btn.addEventListener("click",()=>{
    let _text= text.value.split("");
    let _result="";
    for (let i = _text.length-1; i >-1 ; i--) {
     
        _result+=_text[i];
        
    }
    
    result.innerHTML=_result
})

// seconds method `join()|| reverse()`


/* btn.addEventListener("click",()=>{
    let _text= text.value.split("").reverse();
    let _result=_text.join("");
    result.innerHTML=_result
}) */