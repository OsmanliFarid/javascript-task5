/*Task-10
İstifadəçidən rəqəm qəbul edən və onun müsbət, 
mənfi və ya sıfır olduğunu yoxlayan bir funksiya yazın. (if-else ilə) */
const num = () =>{
   let number = +prompt("reqem daxil et");
   let mesaj = ""
   if(number > 0){
       mesaj =  `${number} musbet ededdir`;
   }else if(number < 0){
      mesaj =  `${number} menfi ededdir`;
   }else if(number === 0){
      mesaj =  `${number}-dir`;
   }
   return mesaj;
}
const a = num();
console.log(a)
