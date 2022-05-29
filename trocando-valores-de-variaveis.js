let a = 'vermelho';
let b = 'azul';
/*
Para trocar valores duas ou mais váriaveis
é necessário que criamos uma nova váriavel
para que possa receber o valor de 'uma' sem
que essa 'uma' perca o valor, segue abaixo:
*/
let c = a; // nova variável recebe o valor de 'a'
a = b; // 'a' recebe o valor de 'b'
b = c; // 'b' recebe o valor de 'c'

console.log(a);
console.log(b);

//att. Matheus Pereira - curso Javascript iniciantes