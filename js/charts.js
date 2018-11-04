"use strict";
let chartData = {
    labels: [],
    income: []
}
function updateChartData () { 
    let label = ($('#month').val()),
        num = $('#earnings').val();
    if (label !== "" || num !== "") {
        chartData.labels.push($('#month').val())
        chartData.income.push(($('#earnings').val())*1)
    }
    else 
    return false
}
function clearForm () { 
    $('#month').val('')
    $('#earnings').val('')
    $('#month').focus()
}
    
function buildChart() {
    var myChart = Highcharts.chart('myFinances', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'My income stats'
        },
        xAxis: {
            categories: chartData.labels
        },
        yAxis: {
            title: {
                text: 'Earnings'
            }
        },
        series: [{
            name: 'Earnings',
            data: chartData.income
        }],
        colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce','#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']
    });
};