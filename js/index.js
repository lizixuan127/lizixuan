/*
~function () {
    var myChart = echarts.init(AAA);
    var option = {
        ...
    };
    myChart.setOption(option);
}();
*/
~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            text: '2014年至2017年空气质量变化',
            subtext: '数据来源于中国气象局',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['优', '轻度污染', '严重污染'],
            x: '0%',
            orient: 'vertical'
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
                position: 'right',
                axisLabel: {
                    formatter: '{value} 天'
                }
            }
        ],
        series: [
            {
                name: '优',
                type: 'line',
                data: [83, 119, 135, 147],
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
                data: [114, 99, 108, 95],
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
                data: [28, 27, 15, 16],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            }
        ]
    };
    myChart.setOption(option);
}();

/*配置基础的饼状图配置项：带时间轴的*/
function CREATE_CONFIG(YEAR, ARY) {
    //=>时间轴
    var TIMELINE = [];
    for (var i = 1; i <= ARY.length; i++) {
        var N = i < 10 ? '0' + i : i;
        TIMELINE.push(YEAR + '-' + N);
    }

    //=>每个月的配置项
    function TEMP(N) {
        return {
            title: {
                text: YEAR + '年度保定空气质量对比',
                subtext: '数据来源于中国天气网',
                x: 'center',
                textStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}天 ({d}%)"
            },
            legend: {
                data: ['良', '优', '轻度污染', '中度污染', '重度污染', '严重污染'],
                x: '0%',
                orient: 'vertical'
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 50
                            }
                        }
                    }
                }
            },
            series: [
                {
                    name: YEAR + '年度' + N + '月保定空气质量对比',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: '50%',
                    data: ARY[N - 1]
                }
            ]
        };
    }

    //=>最后的配置项
    var OPTIONS = [];
    for (var j = 1; j <= ARY.length; j++) {
        OPTIONS.push(TEMP(j));
    }
    var PIE_CONFIG = {
        timeline: {
            data: TIMELINE
        },
        options: OPTIONS
    };
    return PIE_CONFIG;
}

echarts.init(ET2).setOption(CREATE_CONFIG(2014, [
    [
        {value: 0, name: '良'},
        {value: 1, name: '优'},
        {value: 4, name: '轻度污染'},
        {value: 1, name: '中度污染'},
        {value: 17, name: '重度污染'},
        {value: 6, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 3, name: '优'},
        {value: 7, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 6, name: '重度污染'},
        {value: 6, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 7, name: '优'},
        {value: 8, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 10, name: '重度污染'},
        {value: 1, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 6, name: '优'},
        {value: 16, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 4, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 10, name: '优'},
        {value: 11, name: '轻度污染'},
        {value: 9, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 9, name: '优'},
        {value: 16, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 2, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 8, name: '优'},
        {value: 11, name: '轻度污染'},
        {value: 10, name: '中度污染'},
        {value: 2, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 7, name: '优'},
        {value: 14, name: '轻度污染'},
        {value: 9, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 10, name: '优'},
        {value: 15, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 8, name: '优'},
        {value: 7, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 8, name: '重度污染'},
        {value: 4, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 6, name: '优'},
        {value: 3, name: '轻度污染'},
        {value: 8, name: '中度污染'},
        {value: 7, name: '重度污染'},
        {value: 4, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 8, name: '优'},
        {value: 2, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 8, name: '重度污染'},
        {value: 7, name: '严重污染'}
    ]
]));

echarts.init(ET3).setOption(CREATE_CONFIG(2015, [
    [
        {value: 0, name: '良'},
        {value: 2, name: '优'},
        {value: 2, name: '轻度污染'},
        {value: 8, name: '中度污染'},
        {value: 12, name: '重度污染'},
        {value: 6, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 4, name: '优'},
        {value: 5, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 12, name: '重度污染'},
        {value: 4, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 5, name: '优'},
        {value: 10, name: '轻度污染'},
        {value: 11, name: '中度污染'},
        {value: 4, name: '重度污染'},
        {value: 1, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 11, name: '优'},
        {value: 13, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 16, name: '优'},
        {value: 11, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 9, name: '优'},
        {value: 13, name: '轻度污染'},
        {value: 7, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 12, name: '优'},
        {value: 16, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 15, name: '优'},
        {value: 12, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 6, name: '良'},
        {value: 14, name: '优'},
        {value: 6, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 2, name: '良'},
        {value: 18, name: '优'},
        {value: 2, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 7, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 2, name: '良'},
        {value: 12, name: '优'},
        {value: 7, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 3, name: '重度污染'},
        {value: 3, name: '严重污染'}
    ],
    [
        {value: 3, name: '良'},
        {value: 1, name: '优'},
        {value: 2, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 8, name: '重度污染'},
        {value: 13, name: '严重污染'}
    ]
]));

echarts.init(ET4).setOption(CREATE_CONFIG(2016, [
    [
        {value: 0, name: '良'},
        {value: 5, name: '优'},
        {value: 5, name: '轻度污染'},
        {value: 7, name: '中度污染'},
        {value: 12, name: '重度污染'},
        {value: 2, name: '严重污染'}
    ],
    [
        {value: 4, name: '良'},
        {value: 11, name: '优'},
        {value: 4, name: '轻度污染'},
        {value: 6, name: '中度污染'},
        {value: 4, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 15, name: '优'},
        {value: 10, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 3, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 9, name: '优'},
        {value: 17, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 17, name: '优'},
        {value: 12, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 11, name: '优'},
        {value: 17, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 13, name: '优'},
        {value: 13, name: '轻度污染'},
        {value: 4, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 9, name: '良'},
        {value: 18, name: '优'},
        {value: 4, name: '轻度污染'},
        {value: 0, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 3, name: '良'},
        {value: 17, name: '优'},
        {value: 3, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 2, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 13, name: '优'},
        {value: 11, name: '轻度污染'},
        {value: 0, name: '中度污染'},
        {value: 6, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 3, name: '优'},
        {value: 6, name: '轻度污染'},
        {value: 10, name: '中度污染'},
        {value: 7, name: '重度污染'},
        {value: 3, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 3, name: '优'},
        {value: 6, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 9, name: '重度污染'},
        {value: 10, name: '严重污染'}
    ]
]));

echarts.init(ET5).setOption(CREATE_CONFIG(2017, [
    [
        {value: 0, name: '良'},
        {value: 2, name: '优'},
        {value: 4, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 15, name: '重度污染'},
        {value: 5, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 8, name: '优'},
        {value: 5, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 5, name: '重度污染'},
        {value: 7, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 14, name: '优'},
        {value: 8, name: '轻度污染'},
        {value: 5, name: '中度污染'},
        {value: 3, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 18, name: '优'},
        {value: 9, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 14, name: '优'},
        {value: 7, name: '轻度污染'},
        {value: 6, name: '中度污染'},
        {value: 2, name: '重度污染'},
        {value: 2, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 7, name: '优'},
        {value: 8, name: '轻度污染'},
        {value: 12, name: '中度污染'},
        {value: 3, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 13, name: '优'},
        {value: 7, name: '轻度污染'},
        {value: 9, name: '中度污染'},
        {value: 2, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 1, name: '良'},
        {value: 14, name: '优'},
        {value: 14, name: '轻度污染'},
        {value: 1, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 9, name: '优'},
        {value: 14, name: '轻度污染'},
        {value: 6, name: '中度污染'},
        {value: 1, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 4, name: '良'},
        {value: 16, name: '优'},
        {value: 9, name: '轻度污染'},
        {value: 2, name: '中度污染'},
        {value: 0, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 19, name: '优'},
        {value: 5, name: '轻度污染'},
        {value: 3, name: '中度污染'},
        {value: 3, name: '重度污染'},
        {value: 0, name: '严重污染'}
    ],
    [
        {value: 0, name: '良'},
        {value: 13, name: '优'},
        {value: 5, name: '轻度污染'},
        {value: 6, name: '中度污染'},
        {value: 5, name: '重度污染'},
        {value: 2, name: '严重污染'}
    ]
]));