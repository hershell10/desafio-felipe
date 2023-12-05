//passo 1 criar uma variavel para armazenar o nome e a experiencia do herio
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
let heroi =["Hercules", 7000]

nivelHeroi()

function nivelHeroi(){
   

if (heroi[1] < 1000) {
    return nivelHeroi = "ferro";

}
else if (heroi[1] === 1001 || 2000){
    return nivelHeroi = "bronze";
}
else if (heroi[1] === 6001 || 7000){
    return nivelHeroi = "ouro";

}
else if (heroi[1] === 7001 || 8000) {
    return nivelHeroi = "paltina";

}
else if (heroi[1] === 8001 || 9000) {
    return nivelHeroi = "ascendente";

}
else if (heroi[1] === 9001 || 10000) {
    return nivelHeroi = "imortal";
}
else if (heroi[1] >= 10001) {
   return nivelHeroi = "radiante"
}

}

console.log("O Herói de nome " +  heroi[0] + " está no nível de " + nivelHeroi)
