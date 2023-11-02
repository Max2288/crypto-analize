import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    UniversalTransition,
    CanvasRenderer
]);


export type WaterfallChartOptions = {
    title: TitleComponentOption;
    tooltip: TooltipComponentOption;
    grid: GridComponentOption;
    xAxis: { [key: string]: any };
    yAxis: { [key: string]: any };
    series: BarSeriesOption[];
};

interface WaterfallChartProps {
    option: WaterfallChartOptions;
    width?: string;
    height?: string;
}
// TODO: необходимо использовать единообразные ф-ции для компонентов, так как это может в будущем плохую шутку
// TODO: либо expression, либо declaration

const WaterfallChartComponent: React.FC<WaterfallChartProps> = ({
    option,
    width = '100%',
    height = '400px',
}) => {
    const chartRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current, 'dark');
            myChart.setOption(option);

            window.addEventListener('resize', () => {
                myChart.resize();
            });

            return () => {
                myChart.dispose();
            };
        }
    }, [chartRef, option]);
    // TODO: по хорошему все стоит вынести в файл css, а не писать инлайновые стили
    return <div ref={chartRef} style={{ width, height }} />;
};

export default WaterfallChartComponent;
