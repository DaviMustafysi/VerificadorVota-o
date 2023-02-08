const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputAnoatual = e.target.querySelector('#anoAtual'); // anoAtual
    const inputAnonascimento = e.target.querySelector('#anoNascimento'); // anoNascimento

    const anoAtual = Number(inputAnoatual.value); // Convertendo os valores para Number
    const anoNascimento = Number(inputAnonascimento.value); // Convertendo os valores para Number

    if (!anoAtual) {
        setResultado('Ano Atual inválido', false)
        return;
    }

    if(!anoNascimento) {
        setResultado('Ano Nascimento inválido', false)
        return;
    }

    const calculo = getSomar(anoAtual, anoNascimento);
    
    const nivelCalculo = getNivelvotar(calculo);

    const msg = `Você tem apenas ${calculo} anos (${nivelCalculo}).`;

    setResultado(msg, true);

});

function getNivelvotar (calculo) {
    const nivel = ['Apto Para Votar', 'Não Apto Para Votar'];

    if (calculo >= 18) {
        return nivel[0];
    } else {
        return nivel[1];
    }
}

function getSomar (anoAtual, anoNascimento) {
    const calculo = anoAtual - anoNascimento; 
    return calculo;
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();

    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}
