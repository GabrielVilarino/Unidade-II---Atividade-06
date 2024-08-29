const prompt = require('prompt-sync')()

/*
Questão 01

Escreva um programa que solicite um número inteiro e verifique se é divisível por 3 e
por 5 ao mesmo tempo.

*/

function questao01(){
    let numero = parseInt(prompt('Digite um numero inteiro: '))

    // result = verificaDivisao(numero)

    let mensagem = numero % 3 === 0 && numero % 5 === 0 ? 'O número é divisível' : 'O número não é divisível'

    console.log(mensagem)
}

// questao01()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 02

Faça um programa que leia três números e informe qual é o maior e qual é o menor.
*/
function questao02(){
    const entrada = prompt('Digite 3 números separados por espaço: ')

    const numeros = entrada.split(' ').map(num => parseFloat(num))

    if (numeros.length === 3){
        let maior = numeros[0]
        let menor = numeros[0]

        for (let numero of numeros){
            maior = numero > maior ? numero : maior
            menor = numero < menor ? numero : menor
        }

        console.log(`Número maior é: ${maior}`)
        console.log(`Número menor é: ${menor}`)
    }
    else{
        console.log('Por favor digite a quantidade exata de numeros!')
    }
}

// questao02()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 03

Faça um programa que leia a idade de três pessoas e informe se alguma delas é maior
de idade (idade maior ou igual a 18), se todas são maiores de idade, ou se todas são
menores de idade (idade inferior a 18 anos).
*/

function questao03(){
    const entrada = prompt('Digite 3 idades separadas por espaço: ')

    const idades = entrada.split(' ').map(idade => parseFloat(idade))

    if (idades.length === 3){
        pessoasAdultas = []
        for (let idade of idades){
            idade >= 18 ? pessoasAdultas.push(idade) : null
        }

        if (pessoasAdultas.length === 3){

            console.log('Todas as pessoas são adultas')
        }
        else if(pessoasAdultas.length === 0){
            console.log('Nenhuma das pessoas é adulta')
        }
        else{
            console.log(`${pessoasAdultas.length} das 3 pessoas são adultas`)
        }
    }
    else{
        console.log('Por favor digite a quantidade exata de idades!')
    }
}

// questao03()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Questão 04

Faça um programa que solicite o nome de um dia da semana e exiba se é um dia útil
(segunda a sexta-feira) ou um dia de fim de semana (sábado e domingo).
*/
function questao04(){
    const diaDaSemana = prompt('Digite um dia da semana: ')

    switch(diaDaSemana){
        case 'segunda':
        case 'terça':
        case 'quarta':
        case 'quinta':
        case 'sexta':
            console.log('É dia útil')
            break
        
        case 'sabado':
        case 'domingo':
            console.log('É final de semana')
            break
        
        default:
            console.log('Digite um dia válido (segunda, terça, quarta, quinta, sexta, sabado ou domingo)')
    }
}

questao04()
