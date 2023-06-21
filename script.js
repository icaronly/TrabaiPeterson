(
    async function () {
        new Chart(
            document.getElementById("grafico1"),
            {
                type: 'pie',
                data: {
                    labels: [
                        'Adição',
                        'Subtração',
                        'Multiplicação',
                        'Divisão'
                      ],
                      datasets: [{
                        label: 'Dificuldades',
                        data: [5, 3, 6, 10],
                        backgroundColor: [
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)',
                          'rgb(255, 99, 132)',
                          'rgb(200, 90, 100)'
                        ],
                        hoverOffset: 10
                        }
                    ]
                }
            }
        )
    }
)();