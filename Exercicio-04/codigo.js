//  Escreva um programa que peça ao usuário para inserir um número N e então calcule e imprima o fatorial desse número.

var numero = parseInt(prompt("digite um numero"));
var fatorial = 1;

for (var i = 1; i <= numero; i++) {
    fatorial *= i;
}

document.write(fatorial)