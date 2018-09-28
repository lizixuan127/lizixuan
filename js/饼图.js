option = {
    title: {
        text: '2014年至2017年空气质量变化',
        subtext: '数据来源于中国气象局'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['优', '轻度污染','严重污染']
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2014', '2015', '2016', '2017']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} 天'
            }
        }
    ],
    series: [
        {
            name: '优',
            type: 'line',
            data: [83,119,135,147],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        },
        {
            name: '轻度污染',
            type: 'line',
            data: [114,99,108,95],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
        },
        {
            name: '严重污染',
            type: 'line',
            data: [28,27,15,16],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
        }
    ]
};