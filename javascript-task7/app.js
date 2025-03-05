/*Task-07
Bir ədədi parametr kimi qəbul edən və cüt olduqda true, 
tək olduqda isə false qaytaran isEven () funksiyasını yazın. */

const isEven = (Number) =>{
    let mesaj = "";
      if(Number % 2 === 0){
        mesaj = true;
      }else{
        mesaj = false;
      }
      return mesaj;
}


const a = isEven(10);
console.log(a)