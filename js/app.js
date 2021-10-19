$('document').ready(function(){
    $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function(data){
            const criacao = [];
            for (var i in data){
                criacao.push(data[i].data_criacao);//colocando as datas dentro de um array
            }   
            counts = {};
            const sampleArray = criacao;
            //fazendo um dicionario relacionando datas e quantidades
            sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            console.log(counts);
            quantidades = [];
            //array de chaves
            var datas = Object.keys(counts);
            for (i of datas) {
                quantidades.push(counts[i]);
              }

            geraGraficos(datas, quantidades); 
        } 
    });
})

function geraGraficos(datas, quantidades){
    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: datas,
            
            
            datasets: [{
                label: 'Cotações',
                borderColor: 'rgb(255, 99, 132)',
                data: quantidades
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}