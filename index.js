var pontos = 5400;
var resultado
if (pontos <= 1000){
resultado = ("Nível Ferro");
} 
else if (pontos >= 1001 &&  2000){
resultado = ("Nivel Bronze");
}
if (pontos >= 2001 &&  3000){ 
resultado = ("Nivel Prata");
}    
if (pontos >= 3001 &&  4000){ 
resultado = ("Nivel Ouro");
} 
if (pontos >= 4001 &&  5000){ 
resultado = ("Nivel Diamante");
}
if (pontos > 5000){
resultado = ("Nivel Foda");
} 
console.log(resultado)
