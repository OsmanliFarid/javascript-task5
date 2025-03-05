/*Mətni parametri kimi qəbul edən
 və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın. */

let numCounter = (metin) =>{
    let say = 0
    for(let i = 0; i < metin.length ; i++){
       say++;
       
    }
    return say;
}
const a = numCounter("salam");
const b = numCounter("salam dunya");
const c = numCounter("salam fehle");
console.log(a)
console.log(b)
console.log(c)