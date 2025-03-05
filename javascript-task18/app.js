/*
Task-18 
isİnteger adında funksiya yazın.Bu funksiya 1 parametr alacaq və 
parametr olaraq hər şey daxil edə bilərəm.Funksiya, əgər daxil edilən 
parametr integerdirsə true deyilsə false qaytarsın.
*/

const inInteger = () =>{
    let num = +prompt("reqem daxil et");
    let mesaj = "";
    if(num % 1 === 0){
       mesaj = true;
    }else{
        mesaj = false;
    };
    return mesaj;
}
const a = inInteger()
console.log(a);
