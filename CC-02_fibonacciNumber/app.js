let number = document.getElementById("inputNumber")
let btn = document.getElementById("btn");
let result = document.getElementById("result");


btn.addEventListener("click",()=>{

    let _result=[1,1];
    for (let i = 0; i < number.value-1; i++) {
    _result.push(_result[i]+_result[i+1])
    
    }
    result.innerHTML=_result
})