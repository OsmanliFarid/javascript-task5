/*
Task-04
Parametr kimi iki ədəd qəbul edən və onlardan
 ən kiçiyini qaytaran min() funksiyası tərtib edin. */


function min(n1,n2){
    let mesaj = "";
    if(n1 > n2){
       mesaj = `${n2} en kiciyidi`;
    }else{
        mesaj = `${n1} en kiciyidi`;
    };
    return mesaj;
}
const a = min(60,40);
console.log(a);
