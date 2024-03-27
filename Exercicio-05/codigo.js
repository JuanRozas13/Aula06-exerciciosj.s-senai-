// Peça ao usuário para inserir um número N e escreva um programa que imprima a tabela de multiplicação desse número até 10.

var numero = parseInt(prompt("Digite um numero"));

document.write("Tabuada do ", numero + ":" +"<br>");
for (var i = 1; i <= 10; i++) {
    document.write(numero +  " x " + i + " = " + (numero * i) + "<br>");
}