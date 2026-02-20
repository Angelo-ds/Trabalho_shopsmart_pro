
const verificaV1 = document.getElementById('valor01'); 
const verificaV2 = document.getElementById('valor02'); 
const resultado = document.getElementById('resultado');

function bloco_de_resultado(){
    resultado.style.display = 'flex';
    resultado.style.background = 'lightblue';

}
function mostrarErro() {
    resultado.style.display = 'flex';
    resultado.style.background = 'red';
    resultado.innerHTML = `
    <ul>
        <li>Erro</li>
        <li>Insira um valor válido para os dois campos.</li>
    </ul>
    `;

    verificaV1.focus();
}

function calcularTotal(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) || isNaN(v2)){
        mostrarErro();
        return;
    }

    bloco_de_resultado();

    resultado.innerHTML = `

            <h2>Total da compra</h2>
            <p>Houve uma compra de ${v2} unidades.</p> 
            <p>com o preço unitário de R$${(v1).toFixed(2)}</p>
            <p>Seu total esperado é: R$${((v1 * v2)).toFixed(2)}</p>

    `;
}



function desconto(){

    const v1 = parseFloat(verificaV1.value); //o primeiro valor que o usuário digita (valor original)
    const v2 = parseFloat(verificaV2.value); // o segundo valor que o usuário digita (valor de termo)
    let  v3 = (v1 * v2) /100 //valor que efetua as contas ncessárias

    if (isNaN(v1) || isNaN(v2)){

        mostrarErro();
        return;
    }

    bloco_de_resultado();

    resultado.innerHTML = `

            <h2>Desconto da compra</h2>
            <p>Sobre o valor de R$${(v1).toFixed(2)} foi aplicado um desconto de ${(v2)}%</p>
            <p>Seu valor esperado é: R$${(v1 - v3).toFixed(2)}</p>

    `;
}


function juros(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);
    let v3 = (v1 * v2) /100

    if (isNaN(v1) || isNaN(v2)){

        mostrarErro();
        return;
    }
 
    bloco_de_resultado();

    resultado.innerHTML = `

            <h2>Juros da compra</h2>
            <p>Sobre o valor de R$${(v1).toFixed(2)} foi aplicado um acréscimo de ${(v2)}%</p>
            <p>Seu valor esperado é: R$${(v1 + v3).toFixed(2)}</p>

    `;
}

function comissao(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);
    let v3 = v2 /100

    if (isNaN(v1) || isNaN(v2)){

        mostrarErro();
        return;
    }

    bloco_de_resultado();

    resultado.innerHTML = `

            <h2>Comissão da compra</h2>
            <p>Sobre o valor de R$${(v1).toFixed(2)} foi aplicado uma comissão de ${v2}% </p>
            <p>Seu valor esperado é: R$${(v1 * v3).toFixed(2)}</p>

    `;
}

function lucro(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)){

        mostrarErro();
        return;
    }


    bloco_de_resultado();

    resultado.innerHTML = `

            <h2>Lucro da compra</h2>
            <p>Teve um gasto de R$${(v2).toFixed(2)} sobre o valor de R$${(v1).toFixed(2)}</p>
            <p>Seu lucro esperado é: R$${(v1 - v2).toFixed(2)}</p>

    `;
}




function limpar(){


    resultado.style.display = "none";

    verificaV1.value = '';
    verificaV2.value = '';

    verificaV1.focus();
}
