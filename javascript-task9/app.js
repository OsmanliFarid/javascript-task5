/*Task-09
İstənilən rəqəmin faktorialını hesablayan bir funksiya yaradın. (dövrlə və if-else ilə) */

const num = () =>{
    let say = +prompt("reqem daxil edin");
    let hasil = 1;
    for(let i = 1; i <= say; i++){
        hasil *= i;
    }
    return hasil;
    
}
const a = num();
console.log(a);

