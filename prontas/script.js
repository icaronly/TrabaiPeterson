var questions = [
    {
      question: "1) Em uma pizzaria, uma pizza foi dividida em 8 fatias iguais. \
      Se 3/4 das fatias foram vendidas, quantas fatias foram vendidas?",
      options: ["6", "5", "4", "3"],
      answer: "a"
    },
    {
      question: "2) Um bolo foi dividido em 12 pedaços iguais. Se 1/3 dos pedaços foram consumidos, \
      quantos pedaços foram consumidos?",
      options: ["4", "3", "2", "1"],
      answer: "a"
    },
    {
      question: "3) Uma turma de estudantes composta por 30 alunos foi dividida em 5 grupos iguais. \
      Quantos alunos há em cada grupo?",
      options: ["6", "5", "4", "3"],
      answer: "a"
    },
    {
      question: "4) João tinha R$ 48. Ele gastou 3/8 desse valor comprando um presente. \
      Quanto dinheiro João gastou com o presente?",
      options: ["R$ 18", "R$ 16", "R$ 15", "R$ 12"],
      answer: "a"
    },
    {
      question: "5) Em uma fazenda, 2/5 dos animais são vacas. \
      Se há 35 animais na fazenda, \quantas vacas há?",
      options: ["14", "12", "10", "8"],
      answer: "a"
    },
    {
      question: "6) Lucas gastou 1/6 do seu tempo estudando Matemática e 1/4 do seu tempo estudando Ciências. \
      Quanto tempo ele gastou estudando essas duas disciplinas?",
      options: ["5/24 do tempo", "5/12 do tempo", "1/4 do tempo", "1/3 do tempo"],
      answer: "b"
    },
    {
      question: "7) Maria tem um saco com 24 balas. Ela deu 1/3 das balas para seu irmão. \
      Quantas balas Maria deu para seu irmão?",
      options: ["8", "6", "4", "2"],
      answer: "b"
    },
    {
      question: "8) Um quarto possui 6/8 da área total de um apartamento. \
      Qual é a fração que representa a área do quarto?",
      options: ["3/4", "2/3", "5/6", "7/8"],
      answer: "a"
    },
    {
      question: "9) Um vendedor de sucos comprou 12 caixas de laranjas, sendo que cada caixa tinha 20 laranjas. \
      Se ele vendeu 2/5 das laranjas, quantas laranjas ele vendeu?",
      options: ["96", "72", "48", "24"],
      answer: "c"
    },
    {
      question: "10) Uma sala de cinema tem 180 lugares. Se 2/9 dos lugares estão ocupados, \
      quantos lugares estão ocupados?",
      options: ["40", "60", "80", "100"],
      answer: "b"
    }
  ];

function generateQuiz() {
    var questionsContainer = document.getElementById("questionsContainer");

    for (var i = 0; i < questions.length; i++) {
        var questionObj = questions[i];
        var questionId = "q" + (i + 1);

        var questionHeading = document.createElement("h2");
        questionHeading.textContent = questionObj.question;

        var optionsDiv = document.createElement("div");
        optionsDiv.id = questionId + "Options";

        var resultDiv = document.createElement("div");
        resultDiv.id = questionId + "Result";

        questionsContainer.appendChild(questionHeading);
        questionsContainer.appendChild(optionsDiv);
        questionsContainer.appendChild(resultDiv);

        for (var j = 0; j < questionObj.options.length; j++) {
            var option = questionObj.options[j];
            var optionId = questionId + "Option" + (j + 1);

            var input = document.createElement("input");
            input.type = "radio";
            input.name = questionId;
            input.value = String.fromCharCode(97 + j);

            var label = document.createElement("label");
            label.setAttribute("for", optionId);
            label.innerHTML = option;

            optionsDiv.appendChild(input);
            optionsDiv.appendChild(label);
            optionsDiv.appendChild(document.createElement("br"));
        }
    }
}

function submitQuiz() {
    var form = document.getElementById("quizForm");
    var answers = form.elements;

    var correctAnswers = questions.map(function (question) {
        return question.answer;
    });

    for (var i = 0; i < correctAnswers.length; i++) {
        var question = "q" + (i + 1);
        var userAnswer = getSelectedAnswer(answers[question]);
        var labels = form.querySelectorAll('input[name="' + question + '"] + label');
        var resultDiv = document.getElementById(question + "Result");

        if (userAnswer === correctAnswers[i]) {
            labels[userAnswer.charCodeAt(0) - 97].classList.add("correct1");
            resultDiv.textContent = "Correta!";
            resultDiv.classList.add("correct");
        } else if (userAnswer !== null) {
            labels[userAnswer.charCodeAt(0) - 97].classList.add("wrong1");
            labels[correctAnswers[i].charCodeAt(0) - 97].classList.add("correct1");
            resultDiv.textContent = "Incorreta! A alternativa correta era " + labels[correctAnswers[i].charCodeAt(0) - 97].textContent;
            resultDiv.classList.add("wrong");
        } else {
            resultDiv.textContent = "Você não selecionou uma resposta.";
        }
    }

    window.scrollTo(0, 0);
}

function getSelectedAnswer(radioButtons) {
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
    return null;
}

window.onload = generateQuiz; 