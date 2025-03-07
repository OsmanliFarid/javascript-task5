const num = () =>{
    let metin = prompt("mesaj daxil et")
    let newWord2 = ""
    let mesaj = ""
    for(let i = 0;i < metin.length;i++){
       let newWord = metin[i]
       if(!(newWord === "0" || newWord === "1" || newWord === "2" || newWord === "3" || newWord === "4" || newWord === "5" ||
           newWord === "6" || newWord === "7" || newWord === "8" || newWord === "9")){
           newWord2 += newWord
       }
       
       
    }
    return newWord2
    
}
const a = num()
console.log(a);