const str = () => {
    let metin = prompt("mesaj");
    let mesaj = 0;
    for(let i = 0;i<metin.length;i++){
        let newWord = metin[i]
        if( newWord === "a" || newWord === "ə" || newWord === "e" ||newWord === "i" ||
            newWord ===  "o" ||newWord === "ö"  ||newWord === "u" ||newWord === "ü"){
            
            mesaj++
        }
        
        
        
    }
    return mesaj
    
}

const a = str()
console.log(a);
