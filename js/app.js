
const verificaV1 = document.getElementById('valor01'); 
const verificaV2 = document.getElementById('valor02'); 
const resultado = document.getElementById('resultado');

function calcularTotal(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) || isNaN(v2)){
        resultado.innerHTML=
        `
        <h2>Erro<h2>
        <p>insira um valor válido para os dois campos.<p>
        `
            verificaV1.focus();
        return;
    }

    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <ul>
            <h2>Total da compra<h2>
            <p>Houve uma compra de ${v2} unidades com o preço unitário de R$${v1}
            <p>Seu total esperado é: R$${v1 * v2}</p>
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
            <h2>Desconto esperado<h2>
            <p>foi aplicado um desconto de R$${v2} sobre o valor de R$${v1}
            <p>Seu desconto esperado é: R$${v1 - v3}<p>
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
            <h2>Juros da compra<h2>
            <p>foi aplicado um acréscimo de R$${v2} sobre o valor de R$${v1}
            <p>Seu Juros esperado é: R$${v1 + v3}<p>
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
            <h2>Comissão da compra<h2>
            <p>Foi aplicado uma porcentagem de ${v2}% sobre o valor de R$${v1}
            <p>Sua comissão esperada é: R$${v1 * v3}</p>
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
            <p>Teve um gasto de R$${v2} sobre o valor de R$${v1}
            <p>Seu lucro esperado é: R$${v1 - v2}<p>
        </ul>
    `;
}




function limpar(){


    resultado.style.display = "none";

    verificaV1.value = '';
    verificaV2.value = '';

    verificaV1.focus();
}
