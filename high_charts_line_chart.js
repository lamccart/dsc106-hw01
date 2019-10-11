Highcharts.chart('container', {

    title: {
        text: 'Interested Students, UCSD 2005-2018'
    },

    subtitle: {
        text: 'Source: ucsd.edu'
    },

    yAxis: {
        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'Fulltime Men Applied',
        data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
    }, {
        name: 'Fulltime Women Applied',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430 , 46845, 52265]
    }, {
        name: 'Fulltime Men Admitted',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265]
    }, {
        name: 'Fulltime Women Admitted',
        data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12966, 12837, 13761, 16170, 16231, 15821]
    }, {
        name: 'Fulltime Men Enrolled',
        data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 2711, 2669, 2725, 3220]
    }, {
        name: 'Fulltime Women Enrolled',
        data: [2113, 2558, 2303, 2399, 2054, 2089, 1861, 2245, 2612, 2383, 2581, 3077, 2974, 3484]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});