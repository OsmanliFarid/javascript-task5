/*
Task-14
İstifadəçidən bir söz daxil etməsini tələb edən və bu sözün 
palindrom olub olmadığını yoxlayan bir proqram yazın. (funksiya, dövr və if-else ilə) */

const String = () =>{
    let metin = prompt("metin daxil et");
    let mesaj = "";
    let newMesaj = "" 
    for(let i = metin.length - 1;i >= 0; i--){
        newMesaj += metin[i];
    };
    if(metin === newMesaj){
        
        mesaj = newMesaj + " sozu palindromdu";
        
    }else{
        mesaj = metin + " sozu palindrom deyil";
    };
    return mesaj;
    
    
}
const a = String()
console.log(a)