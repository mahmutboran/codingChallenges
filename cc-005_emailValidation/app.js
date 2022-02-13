let email = document.getElementById("email");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click",()=>{
    
let e = email.value
if (e.includes("@") && e.includes(".") && (e.indexOf(".")+4==e.length || e.indexOf(".")+3==e.length) ){
    result.innerText="Valid"
} else {
    result.innerText="İnvalid"
}
})

