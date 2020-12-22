function ColChart(x, y) 
{
    Highcharts.chart('col',{
        chart: {
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: '提交数量'
        },
        credits: {  
            enabled: false  
        },  
        xAxis: {
            categories: [
                x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11]
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '提交数量'
            }
        },
        tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series: [{
            name: "总提交数量",
            data: y
        }],
        colors: ['#efb6f1']
    });
}
