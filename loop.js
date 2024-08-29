const prompt = require('prompt-sync')()

/*
Questão 05

Escreva um programa que solicite ao usuário um número N e exiba todos os números
primos menores que N.

*/

function verificaNumero(numero){
    if (numero <= 1) return false

    if (numero <= 3) return true
    
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    
    for (let i = 5; i * i <= numero; i += 6){
        if (numero % i === 0 || numero % (i + 2) === 0) return false
    }

    return true
}

function questao05(){
    let numero = parseInt(prompt('Digite um numero inteiro: '))

    if (isNaN(numero) || numero <= 0) {
        console.log('Por favor, digite um número inteiro positivo.')
        return
    }

    let result = verificaNumero(numero) 

    let mensagem = result ? `O número '${numero}' é primo` : `o número '${numero}' não é primo`

    console.log(mensagem)
}

// questao05()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 06

Faça um programa que solicite ao usuário um número e exiba a sequência de
Fibonacci até o número informado utilizando um laço de repetição.
*/

function fibonacci(numero){
    let a = 0, b = 1
    let fibo = [a, b]

    while(true){
        let proximo = a + b

        if (proximo > numero) break

        fibo.push(proximo)

        a = b
        b = proximo
    }

    console.log(`A sequência de Fibonacci é ${fibo.join(', ')}`)
}

function questao06(){
    let numero = parseInt(prompt('Digite um numero: '))

    if (numero < 0){
        console.log('Digite um número inteiro positivo')
        return
    }

    fibonacci(numero)
}

// questao06()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 07

Escreva um programa que solicite ao usuário uma lista de números, até o usuário
digitar o número zero, e exiba o maior e o menor número da lista.

*/

function verificaNumeros(listaNumeros){
    maior = listaNumeros[0]
    menor = listaNumeros[0]
    for (let numero of listaNumeros){
        maior = numero > maior ? numero : maior
        menor = numero < menor ? numero : menor
    }

    console.log(`Maior número da lista é: ${maior}`)
    console.log(`Menor número da lista é: ${menor}`)
}

function questao07(){
    listaNumeros = []
    while(true){

        let numero = parseFloat(prompt('Digite um numero (caso queira parar digite 0): '))

        if (numero === 0) break

        listaNumeros.push(numero)
    }

    if (listaNumeros.length > 0)
        verificaNumeros(listaNumeros)
    else
        console.log('Lista está vazia')

}

// questao07()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 08

Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais
na frase.
*/

function contarVogais(frase) {
    frase = frase.toLowerCase();

    const vogais = 'aeiou';
    let contagem = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            contagem++;
        }
    }

    return contagem;
}

function questao08(){
    let frase = prompt('Digite uma frase: ')

    let quantidadeVogais = contarVogais(frase)
    
    console.log(`A quantidade de vogais é: ${quantidadeVogais}`)

}

questao08()