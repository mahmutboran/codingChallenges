let number1 =document.getElementById("number1");
let number2 =document.getElementById("number2");
let sign = document.getElementById("sign");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click",()=>{
 
    let n1=Number(number1.value);
    let n2=Number(number2.value);

    if (sign.value=="+") {result.innerHTML=n1+n2}
    else if(sign.value=="-"){result.innerHTML=n1-n2}
    else if(sign.value=="/"){result.innerHTML=n1/n2}
    else {result.innerHTML=n1*n2}
})