let nomeDoHeroi = 'Jack';
let experiencia = 5.600;
let nivel = '';

if(experiencia <= 1.000){
    nivel = 'ferro';
}else if(experiencia >= 1.001 && experiencia <= 2.000){
    nivel = 'Bronze';
}else if(experiencia >= 2.001 && experiencia <= 5.000){
    nivel = 'Prata';
}else if(experiencia >= 5.001 && experiencia <= 7.000){
    nivel = 'Ouro';
}else if(experiencia >= 7.001 && experiencia <= 8.000){
    nivel = 'Platina';
}else if(experiencia >= 8.001 && experiencia <= 10.000){
    nivel = 'Imortal';
}else{
    nivel = 'Radiante';
}

console.log(`O herói de nome ${nomeDoHeroi} está no nível de ${nivel}.`);