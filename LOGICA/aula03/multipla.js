// Avaliador de entregas
// Para estruturar decisões no código utilizamos a família if else.
// if = se
// else = senão
// else = if = senão se
// O if pode uma condição e se ela for atendido, executa o código que está entre {}
// Já o else serve para atender os casos que não contemplam as condições anteriores.
// Se tivermos mais de uma condições, como no exemplo abaixo, é necessario utilizar o else if, que nega o if anterior e propõe uma nova condição.
// Por exemplo, se não for nota 5, mas for nota 4, o programa escreve Melhoras! na tela.

let nota = 98

if (nota == 5) {
    console.log("AURA! ♿")
}
else if (nota == 4){
    console.log("Melhoras! 🤡👻")
}
else if (nota == 3){
    console.log("Estava bem embalado! 🥂")
}
else if (nota == 2){
    console.log("Minha Vó faz melhor que você! 🧓😆")
}
else if (nota == 1){
    console.log("Vai trabalhar de CLT pelo resto da eternidade... 💀")
}
else{
    console.log("INSIRA UMA NOTA VÁLIDA DE 1 A 5!!!")
}