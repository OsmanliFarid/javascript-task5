/*Task-02
Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
Fərqli arqumentlərlə funksiyanı üç dəfə çağırın */

function Big(n1,n2,n3){
    let mesaj = ""
     if(n1 < n2 && n3){
        console.log(`${n1} ededi boyukdur`)
     }else if(n2 > n1 && n3){
        console.log(`${n2} ededi boyukdur`)
     }else if(n3 > n2 && n1){
        console.log(`${n3} ededi boyukdur`)
     }
}

Big(170,60,145)

