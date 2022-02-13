let text = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");



btn.addEventListener("click",()=>{

   var myTableDiv = document.getElementById("myDynamicTable");
 
   var table = document.createElement('TABLE');
   table.border = '1';

 
   var tableBody = document.createElement('TBODY');
   table.appendChild(tableBody);

   let myArray=["St Nr","First Name","Last Name","Location","Path"] 
   myArray.forEach(e => {
     var th =document.createElement("TH");
     th.appendChild(document.createTextNode(e))
     tableBody.appendChild(th)
   });

  let textArray =  text.value.split("',\n'")
  console.log(textArray)

   for (var i = 0; i < textArray.length; i++) {
     var tr = document.createElement('TR');
     tableBody.appendChild(tr);

     let rowArray =textArray[i].split(" ")
     console.log(rowArray)
 
     for (var j = 0; j < 6; j++) {
       var td = document.createElement('TD');
       td.width = 'auto';
       if (rowArray[j].length<=1) {
         continue
       } else {
           td.appendChild(document.createTextNode(rowArray[j]));
          tr.appendChild(td);
       }
     
     }
   }
   myTableDiv.appendChild(table);
 })
