const numstr = () =>{
    let metin = prompt("metin daxil et")
    let newMetin = metin[0].toUpperCase()
    
    let newword2 = ""
    
    
    for(let i = 1;i<metin.length;i++){
        
        newword2 += metin[i].toLowerCase()
        
    }
    let newword3 = newMetin + newword2
    return newword3
    
    
}
const a = numstr()
console.log(a);