

const num = () =>{
    let reqem = +prompt("reqem daxil et");
    let numstr = String(reqem)
    let degistirme = numstr.length 
    let mesaj = ""
    for(let i = 0; i < degistirme;i++){
        if(degistirme === "."){
          mesaj `${reqem} tam eded deyil`
        }else{
            mesaj = `${reqem} tam ededdir`
        }
    }
    return mesaj
}
const a = num()
console.log(a)