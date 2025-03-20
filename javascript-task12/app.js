/*
Task-12
İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin 
ayın neçə gün çəkdiyini göstərən bir proqram yazın. (switch-case ilə) */

let ay_daxil = prompt("Bir ay adı daxil edin ");

const ayGunSayisi = (ay) => {
    let mesaj = "";
    
    switch (ay) {
        case "yanvar":
            mesaj = "Yanvar ayı 31 gündür.";
            break;
        case "fevral":
            mesaj = "Fevral ayı 28-29 gündür.";
            break;
        case "mart":
            mesaj = "Mart ayı 31 gündür.";
            break;
        case "aprel":
            mesaj = "Aprel ayı 30 gündür.";
            break;
        case "may":
            mesaj = "May ayı 31 gündür.";
            break;
        case "iyun":
            mesaj = "İyun ayı 30 gündür.";
            break;
        case "iyul":
            mesaj = "İyul ayı 31 gündür.";
            break;
        case "avqust":
            mesaj = "Avqust ayı 31 gündür.";
            break;
        case "sentyabr":
            mesaj = "Sentyabr ayı 30 gündür.";
            break;
        case "oktyabr":
            mesaj = "Oktyabr ayı 31 gündür.";
            break;
        case "noyabr":
            mesaj = "Noyabr ayı 30 gündür.";
            break;
        case "dekabr":
            mesaj = "Dekabr ayı 31 gündür.";
            break;
        default:
            mesaj = "Yanlış ay adı daxil etdiniz.";
            break;
    }
    
    return mesaj;
};


console.log(ayGunSayisi(ay_daxil));
log