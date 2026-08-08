// chamo os elementos previous current do html pelo DOM
const previousOperation = document.querySelector("#previous")
const currentOperation = document.querySelector("#current")
// chamo todos os botoes do container e os adiciono a um array de botões
const buttons = document.querySelectorAll("#buttons-container button")

// o forEach percorre o array de botões e adiciona um evento de click a cada botão
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerHTML
        
        // verifico se o valor do botão clicado é um número ou um ponto, 
        // se for adiciono ao current, se não, exibo uma mensagem de erro
        if (parseInt(value) >= 0 || value === '.'){
            calc.addDigit(value)
        }else{
            console.log('nao é numero!')
        }
    })
})

// a classe Calculator é responsável por gerenciar as operações da calculadora
class Calculator {
    // o construtor recebe os elementos previous e current do html
    //previous e current são os elementos do DOM que exibem os valores da 
    // operação anterior e atual
    // current é a variável que armazena o valor atual digitados da operação
    constructor(previousOperation, currentOperation){
        this.previousOperation = previousOperation
        this.currentOperation = currentOperation
        this.current = ''
    }

    
    addDigit(digit){
        this.current = digit
        this.updateScreen()
    }

    updateScreen(){

    }
}

const calc = new Calculator(previousOperation, currentOperation)