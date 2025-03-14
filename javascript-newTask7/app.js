const karakter = () => {
    let str = prompt("MESAJ DAXIL ET")
    let char = prompt("herf daxil ele")
    let metin = "";
    for (let i = 0; i < str.length; i++) {
        metin += char;
    }
    return metin;
}
const a = karakter()
console.log(a);