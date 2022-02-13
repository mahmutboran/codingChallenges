let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let btn = document.getElementById("btn");
let result = document.getElementById("result");


btn.addEventListener("click", () => {
    let n1 = number1.value;
    let n2 = number2.value;
    let n3 = number3.value;
    
    count = 0
    if (n2 > n3 || n2<0 || n3<0) {
        result.innerHTML = "-1"
    } else {
        for (let i = n2; i <= n3; i++) {
            for (let k = 0; k < i.toString().length; k++) {
                if (n1 == Math.trunc(i / Math.pow(10, k) % 10)) {
                    count += 1
                }
            }
        }
    }
    result.innerHTML+=count
})