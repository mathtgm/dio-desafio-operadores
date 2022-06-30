funcao(1, 2);

function funcao(a, b) {

    let soma = a + b;
    let msgIguais = a === b ? ' são ' : ' não são ';
    let msgDez = soma > 10 ? ' maior ' : ' menor ';
    let msgVinte = soma < 20 ?  ' menor ' : ' maior ';

    console.log('Os números ' + a +' e ' + b + msgIguais +'iguais. Sua soma é ' + soma + ', que é' + msgDez + 'que 10 e' + msgVinte + 'que 20');



}