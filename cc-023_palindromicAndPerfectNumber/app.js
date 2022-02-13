let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let btnPal = document.getElementById("btnPal");
let btnPer = document.getElementById("btnPer");
let resultPal = document.getElementById("result1");
let resultPer = document.getElementById("result2");


btnPal.addEventListener("click",()=>{
    for (let i=text2.value; i >=Number(text1.value); i--) {
      i==String(i).split("").reverse().join("") ? resultPal.innerHTML+=i+"\n":"continue";
    }
})
btnPer.addEventListener("click",()=>{
    for (let i=text2.value; i >=Number(text1.value); i--) {
        count=0;
        for (let k = 1; k <= text2.value/2; k++) {
           i%k==0 && i!=k ? count+=k:"continue";
        }
        i==count ? resultPer.innerHTML+=i+"\n" :"continue";
      }
})