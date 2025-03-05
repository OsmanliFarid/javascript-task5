/*
Task-13
İstifadəçidən iki ədəd daxil etməsini tələb edən 
və onların ən böyük ortaq böleni tapıb 
göstərən bir proqram yazın. (dövrlə və if-else ilə)
 */

const _ebob = () => {
    let ebob = 1;  
    let n1 = +prompt("reqem daxil et")
    let n2 = +prompt("reqem daxil et")
   let mesaj = ""
    for (let i = n1; i >= 1; i--) {
        if (n1 % i === 0 && n2 % i === 0) {  
            ebob = i;
            break;
            
        }
    }
    mesaj = `EBOB: ${ebob}` 
    return mesaj
}
const a = _ebob()
console.log(a);
