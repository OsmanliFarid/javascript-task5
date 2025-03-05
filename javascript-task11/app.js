/*
Task-11
İstifadəçidən bir ədəd daxil etməsini tələb edən və rəqəmin 
mükəmməl və ya mükəmməl olmadığını bildirən bir proqram yazın. (if-else ilə) */

function num(){
    let number = +prompt("reqem daxil et");
    let cem = 0;
    let mesaj = "";
    for(let i = 1; i <number; i++){
        if(number % i === 0){
            cem += i
        }
        
    }
    if(cem === number){
        mesaj = `${number} ededin cemi ${cem} oldugundan mukkemmel ededdir`;
    }else{
        mesaj = `${number} ededin cemi ${cem} oldugundan mukkemmel eded deyil`;
    };
    return mesaj;

};
const a = num()
console.log(a);
