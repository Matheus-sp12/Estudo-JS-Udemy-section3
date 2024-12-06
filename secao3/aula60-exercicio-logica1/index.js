//Escreva uam função que recebe 2 numeros e retorne o maior

function soma(number1, number2) {
    if(number1 > number2) {
        console.log(`O numero ${number1} é maior que o ${number2}`);
    }else if (number2 > number1) {
        console.log(`O numero ${number2} é maior que o ${number1}`);
    }else {
        console.log(`Os dois numeros digitados são iguais!`);
    };
    
}

soma(1000, 500);

//Escreva uma função chamada epaisagem que recebe
//dois argumentos, largura e altura de uma imagem
//(number). Retorne true se a imagem estiver no mo
// paisagem

function ePaisagem(largura, altura) {
    if (largura > altura) console.log(`A imagem está no modo paisagem`);
    else console.log(`A imagem está no modo Retrato`);
    
}

ePaisagem(10.0, 20)

//Escreva uma função que recebe um um numero e retorne o seguinte:
//numero é divisivel por 3 = Fizz
//numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//numero não é divisivel por 3 e 5 = Retorna o proprio numero
//checar se o numero é realmente um número
//Use a função com números de 0 a 100

function fizzBuzz(numero) {
if (typeof numero !== 'number') return numero;

if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
    } 

    for (let i = 0; i < 100; i++) {
        console.log(i, fizzBuzz(i))
        
    }