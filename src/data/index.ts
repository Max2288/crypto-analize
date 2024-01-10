import { WaterfallChartOptions } from "../actions/components/Charts/WaterfallChart/WaterfallChart";
import { PieChartOptions } from "../actions/components/Charts/PieChart/PieChart";
import carolina from 'actions/static/images/carolina.jpg'
import matX from 'actions/static/images/matX.jpg'
import starAdmin from 'actions/static/images/starAdmin.jpg'


export const waterfallChartOptions: WaterfallChartOptions = {
    title: {
        text: 'Waterfall Chart',
        subtext: 'Living Expenses in Shenzhen'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params: any) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '15%',
        right: '15%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        },
        // тут к верхнему массиву добавляем нижний, а значение будет отображено нижнего
        {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'inside'
            },
            data: [2900, 1200, 300, 200, 900, 300]
        }
    ]
};

export const pieChartOptions: PieChartOptions = {
    backgroundColor: '#2c343c',
    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 274, name: 'Union Ads' },
                { value: 235, name: 'Video Ads' },
                { value: 400, name: 'Search Engine' }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: () => Math.random() * 200
        }
    ]
};

export const data = [
    'MarketplaceRedistributionOfAcquiringOperation',
    'OperationMarketplaceDefectRate',
    'OperationAgentDeliveredToCustomer',
    'OperationReturnGoodsFBSofRMS',
    'OperationModerationCounterfeitGoods',
    'ClientReturnAgentOperation'
];

export const dataTranslate = [
    'Оплата эквайринга',
    'Услуга за обработку операционных ошибок продавца',
    'Доставка покупателю',
    'Доставка и обработка возврата, отмены, невыкупа',
    'Модерация поддельных товаров',
    'Получение возврата, отмены, невыкупа от покупателя'
]

export const projects = [
    {
        id: 1,
        title: 'Carolina',
        description: 'Проект по аналитике биржи',
        image: carolina,
    },
    {
        id: 2,
        title: 'matX',
        description: 'Сбор статистики по покупкам',
        image: matX,
    },
    {
        id: 3,
        title: 'starAdmin',
        description: 'Прогноз прибыли для компании',
        image: starAdmin,
    },
];