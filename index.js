var pon = 5400;
var resu
if (pon <= 1000){
resu = ("Nível Ferro");
} 
else if (pon >= 1001 &&  2000){
resu = ("Nivel Bronze");
}
if (pon >= 2001 &&  3000){ 
resu = ("Nivel Prata");
}    
if (pon >= 3001 &&  4000){ 
resu = ("Nivel Ouro");
} 
if (pon >= 4001 &&  5000){ 
resu = ("Nivel Diamante");
}
if (pon > 5000){
resu = ("Nivel Foda");
} 
console.log(resu)