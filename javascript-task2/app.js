/*Task-02
Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
Fərqli arqumentlərlə funksiyanı üç dəfə çağırın */

function Big(n1,n2,n3){
    let mesaj = "";
     if(n1 > n2 && n1 > n3){
      mesaj = `${n1} ededi ${n2} ve ${n3} boyukdur`;
     }else if(n2 > n1 && n2 > n3){
        mesaj = `${n2} ededi ${n3} ve ${n1} boyukdur`;
     }else{
        mesaj = `${n3} ededi ${n1} ve ${n2} boyukdur`;
     };
     return mesaj;
}

const a = Big(40,45,340)
const b = Big(399,24,405)
const c = Big(300,900,200)
console.log(a)
console.log(b)
console.log(c)



