/*Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və 
bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
Məsələn, calc(4, 6, '+');  //  10 qaytaracaq */

const calc = (e1,e2,o) =>{
    let mesaj = "";
    if(o === "+"){
        mesaj = `${e1 + e2}`;
    }else if(o === "-"){
        mesaj = `${e1 - e2}`;
    }else if(o === "*"){
        mesaj = `${e1 * e2}`;
    }else if(o === "/"){
        mesaj = `${e1 / e2}`;
    }
    return mesaj;
}


const a = calc(40,20,"+")
const b = calc(40,20,"-")
const c = calc(40,20,"*")
const d = calc(40,20,"/")
console.log(a)
console.log(b)
console.log(c)
console.log(d)