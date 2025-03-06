/*Task-16
İstifadəçidən bir ədəd daxil etməsini tələb edən və bu ədədin 
Armstrong rəqəmi olub 
olmadığını yoxlayan bir proqram yazın. (dövrlə və if-else ilə) */


const arm = () =>{
    let num = prompt("reqem daxil et")
    let cem = 0
    let length = num.length
    let sayi = Number(num)
    let mesaj = ""
    for(let i = 0;i < length; i++){
        let daxil = Number(num[i])
        cem += daxil ** length
        
    }
    if(cem === sayi){
        mesaj = `${num} bir Armstrong rəqəmidir.`
    }else{
        mesaj = `${num} Armstrong rəqəmi deyil.`
    }
    return mesaj
    
}
const a = arm()
console.log(a);
