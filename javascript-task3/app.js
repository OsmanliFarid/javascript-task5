/*Task-03
Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin 
cəmin rublla göstərən funksiya yazın.
Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var. 
Bir dollar üçün məzənnə 75 rubl təşkil edir. 
Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl. */

function valy(){
    let rubl = +prompt("rubl daxil edin");
    let dollar = +prompt("dollar daxil edin");
    let dollar_qiymeti = 75;
    let rubl_cevir = dollar * 75;
    let cem = rubl + dollarceviri;
    let mesaj = `Bütün hesabların cəmi ${cem} rubldu`;
    
    return mesaj;
}

const a = valy()
console.log(a);
