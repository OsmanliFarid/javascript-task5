/*Task-17
İstifadəçidən bir mətn və bir hərf daxil etməsini istəyən və bu 
hərfin mətndə neçə dəfə təkrarlandığını hesablayan bir proqram yazın. (dövr, if-else)

 */


const str = () => {
   let string = prompt("metin daxil et")
   let herf = prompt("herf daxil et")
   let index = 0
   let mesaj = ""
   for(let i = 0; string.length +1> i;i++){
      if(string[i] === herf){
         index++
      }
   
      mesaj = `${herf} herfi ${string} metininde ${index} defe tekrarlanib`
   }
   
   return mesaj

}
const a = str()
console.log(a);
