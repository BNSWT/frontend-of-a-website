function PieChart(pos, ac, wa, ce, type) {
        Highcharts.chart(pos, {
        chart: {
                type: 'pie',
                backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
                text : type
        },
        tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
                pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                                enabled: false
                        },
                        showInLegend: true
                }
        },
        credits: {  
                enabled: false  
        },      
        series: [{
                name: '百分比',
                colorByPoint: true,
                data: [{
                        name: 'Passed',
                        y: ac,
                        sliced: true,
                        selected: true
                }, {
                        name: 'Found',
                        y: wa,
                        sliced: true,
                        selected: true
                }, {
                        name: 'Complation Error',
                        y: ce,
                        sliced: true,
                        selected: true
                }]
        }],
        colors: ['#bb88ff','#ffa4fa', '#98b3fc' ]
        });
}

