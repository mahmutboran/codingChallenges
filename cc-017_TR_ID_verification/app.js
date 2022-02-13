let text = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");


btn.addEventListener("click",()=>{
    let id = text.value
    let odd = 0;
    let even = 0;
   for (let i = 0; i < id.length-2; i++) {
       if (i%2==0) {
           odd+=Number(id[i])
       }else{
            even+=Number(id[i])
       }
   }
   let ten = (odd*7-even)%10
   let eleven= (odd+even+ten)%10
   if (ten==Number(id[9]) && eleven==Number(id[10])&& Number(id[0]!=0 )){
       result.innerHTML=`${id} is a valid TR ID Number`;
   } else {
    result.innerHTML=`${id} is a invalid TR ID Number`;
   }
 
})