
const verificaV1 = document.getElementById('valor01'); 
const verificaV2 = document.getElementById('valor02'); 
const resultado = document.getElementById('resultado');

function calcularTotal(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) || isNaN(v2)){
        alert("Valor 01 ou Valor 02 inválido. Digite um número.");
            verificaV1.focus();
        return;
    }

    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <li>Seu total esperado é: ${v1} * ${v2} = <span>${v1 * v2}</span></li>
        </ul>
    `;
}



function desconto(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);
    let  v3 = (v1 * v2) /100

    if (isNaN(v1) || isNaN(v2)){
        alert("Valor 01 ou Valor 02 inválido. Digite um número.");
        verificaV1.focus();
        return;
    }


    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <li>Seu desconto esperado é: ${v1} - ${v3} = <span>${v1 - v3}</span></li>
        </ul>
    `;
}


function juros(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);
    let v3 = (v1 * v2) /100

    if (isNaN(v1) || isNaN(v2)){
        alert("Valor 01 ou Valor 02 inválido. Digite um número.");
        verificaV1.focus();
        return;
    }


    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <li>Seu Juros esperado é: ${v1} + ${v3} = <span>${v1 + v3}</span></li>
        </ul>
    `;
}

function comissao(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);
    let v3 = v2 /100

    if (isNaN(v1) || isNaN(v2)){
        alert("Valor 01 ou Valor 02 inválido. Digite um número.");
        verificaV1.focus();
        return;
    }


    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <li>Sua comissão esperada é: ${v1} * ${v3} = <span>${v1 * v3}</span></li>
        </ul>
    `;
}

function lucro(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)){
        alert("Valor 01 ou Valor 02 inválido. Digite um número.");
        verificaV1.focus();
        return;
    }


    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <h2>Lucro da compra<h2>
            <Preço de venda: R$${v1} com o custo de ${v2}
            <li>Seu lucro esperado é: ${v1} - ${v2} = <span>${v1 - v2}</span></li>
        </ul>
    `;
}




function limpar(){


    resultado.style.display = "none";

    verificaV1.value = '';
    verificaV2.value = '';

    verificaV1.focus();
}
