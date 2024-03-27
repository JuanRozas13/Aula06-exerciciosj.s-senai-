// Peça ao usuário que insira um número N e escreva um programa que calcule a soma de todos os números de 1 a N.

var num = parseInt(prompt("Por favor, digite um numero inteiro"))

var sum = 0

for(var s = 1; s <= num;  s++){
    sum += s;
}
document.write( sum+"<br>")