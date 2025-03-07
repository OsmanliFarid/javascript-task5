const word = () =>{
    let mesaj = prompt("mesaj daxil et")
    let herf = prompt("herf daxil et")
    let herf2 = 1
    for(let i = 0;i<mesaj.length;i++){
        if(mesaj[i] === herf){
            herf2 += i
            break
        }
        
    }

    console.log(herf2);
    
}
word()
