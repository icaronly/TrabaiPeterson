let botao = document.getElementById("botao");
let botaoRespostas = document.getElementById("botao-respostas");
let contas = document.querySelector(".contas");

let op = localStorage.getItem('op')

botao.addEventListener('click', function () {
    gerarContasFracionadas();
    botaoRespostas.style.display = "inline";
});

botaoRespostas.addEventListener('click', function () {
    mostrarRespostas();
});

function mdc(a, b) {

    return b === 0 ? a : mdc(b, a % b);

}

function mmc(a, b) {
    let min = (a > b) ? a : b

    while (true) {
        if (min % a == 0 && min % b == 0) {
            break
        }
        min++
    }

    return min;

}



function simplifier(num, den) {

    const dc = mdc(num, den)

    const sNum = num / dc
    const sDen = den / dc

    return {
        numerador: sNum,
        denominador: sDen
    };

}


function gerarContasFracionadas() {
    contas.innerHTML = "";

    for (let i = 1; i <= 1; i++) {
        let numerador1 = Math.floor(Math.random() * 10) + 1;
        let denominador1 = Math.floor(Math.random() * 10) + 1;
        let numerador2 = Math.floor(Math.random() * 10) + 1;
        let denominador2 = Math.floor(Math.random() * 10) + 1;
        let resultado;
        
        
        switch (op) {

            case '+':

                lcm = mmc(denominador1, denominador2)
                nNum1 = numerador1 * (lcm / denominador1)
                nNum2 = numerador2 * (lcm / denominador2)
                resultado = simplifier((nNum1 + nNum2), lcm)
                break
                
            case '-':

                lcm = mmc(denominador1, denominador2)
                nNum1 = numerador1 * (lcm / denominador1)
                nNum2 = numerador2 * (lcm / denominador2)
                resultado = simplifier((nNum1 - nNum2), lcm)
                break

            case '×':

                nNum1 = numerador1 * numerador2
                nNum2 = denominador2 * denominador1
                resultado = simplifier(nNum1, nNum2)
                break

            case '÷':

                nNum1 = numerador1 * denominador2
                nNum2 = numerador2 * denominador1
                resultado = simplifier(nNum1, nNum2)
                break


        }


        let container = document.createElement("div") //div container

        let ques = document.createElement("div"); //div das perguntas
        ques.className = "mostra";
        ques.innerHTML = `
          <math>
            <mfrac>
              <msup>
                <mi>${numerador1}</mi>
              </msup>
              <msup>
                <mi>${denominador1}</mi>
              </msup>
            </mfrac>
            <span class="operador"> ${op} </span>
            <math>
              <mfrac>
                <msup>
                  <mi>${numerador2}</mi>
                </msup>
                <msup>
                  <mi>${denominador2}</mi>
                </msup>
              </mfrac>
            </math>
        `;

        let ans = document.createElement("div"); //div das respostas
        ans.className = "mostra2"
        ans.id = "answer"
        ans.innerHTML = `
        <span class="operador"> = </span>
                <math>
                  <mfrac>
                    <msup>
                      <mi>${resultado.numerador}</mi>
                    </msup>
                    <msup>
                      <mi>${resultado.denominador}</mi>
                    </msup>
                  </mfrac>
                </math>
            `;

        container.appendChild(ques);
        container.appendChild(ans);
        contas.appendChild(container);
    }
}

function mostrarRespostas() {

    let ans = document.querySelectorAll('#answer')

    for (var i = 0; i < ans.length; i++) {
        ans[i].style.visibility = "visible"
    }
}

