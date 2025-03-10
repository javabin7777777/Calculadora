// Constroi os elementos da pagina.

export default  function buildElements(div) {   

    // Criar os 'buttons' de '0 a 9'
    for (let i = 0; i < 10; i++) {
        div.innerHTML = div.innerHTML + `<button class="number">${i}</button>`;
    }
     
    /* Criar os 'buttons' +,-,*,/,$,%,x²,pow,sqrt,root,Ln,Log,e,PI,sen,cos,
            tan,+-,E,(),.,',',CL,DEL,MR,LO,R,= */

    let divNumber = div.innerHTML;
    let X1 = `<button class="operator1">+</button><button class="operator1">-</button><button class="operator1">*</button><button class="operator1">/</button>`;

    let X2 = `<button id="real">R$</button><button id="\%" class="operator1">%</button><button id="pow2")">x²</button><button id="inv" >1/x</button><button id="abs">|x|</button>`;

    let X3 = `<button id="fatorial" title="numeros inteiros positivos">n!</button><button id="mod" title="Resto da disisão de numeros inteiros">mod</button><button id="pow" title="x elevado a y">x<sup>y</sup></button><button id='squareRoot' title="Raiz quadrada">&radic;</button><button  id="root" title="Raiz de qualquer índice"><img src="img/square-root-50-N.png" alt="ícone genérico"></button><button id='ln' title='Logaritmo Neperiano'>ln</button><button id='log' title='Logaritmo Decimal'>log</button>`;

    let X4 = `<button id="euler" title="Numero de Euler">e</button><button id="pi">&pi;</button><button id="sin">sen</button><button id="cos">cos</button>`;

    let X5 = `<button id="tan">tan</button><button id="rad" title="converter para radiano">rad</button><button id="grau" class="operator1">&deg;</button><button id="sign" >&plusmn;</button><button id="signE" title="Notacao cientifica">E</button><button id="parenthesis">( )</button>`;

    let X6 = `<button class="operator1">.</button><button class="operator1">,</button><button  id="clear" title="Clear">CL</button><button  id="del">DEL</button>`;

    let X7 = `<button id="memory" title="Resultado da ultima operacao">MR</button><button id="lastOper" title="Ultima operacao">LO</button><button  onclick="window.location.reload()" title="Reset">R</button><button id="equal" class="grid-item">=</button>`;

    let X8 = `<button id="clearText" title="limpa texto">CTT</button>`;
    
    div.innerHTML = `${divNumber}${X1}${X2}${X3}${X4}${X5}${X6}${X8}${X7}`;

}
