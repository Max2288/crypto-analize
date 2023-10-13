import NavBarSearch from "actions/components/Navbar/NavbarSerach";
import BasicLineChartComponent, { BasicLineChartOptions } from 'actions/components/Charts/BasicLineChart/BasicLineChart';
import WaterfallChartComponent, { WaterfallChartOptions } from 'actions/components/Charts/WaterfallChart/WaterfallChart';
import PieChartComponent, { PieChartOptions } from 'actions/components/Charts/PieChart/PieChart';
import { useState, useEffect } from "react";
import LoginPage from "actions/components/LoginAuth/LoginPage";
import { Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { fetchJsonData } from "actions/utils/post";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function App() {
  const data = ["OperationAgentDeliveredToCustomer", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [requestData, setRequestData] = useState(data[0])
  const [bsLineChartOpt, setChartOptions] = useState<BasicLineChartOptions>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleCarouselChange = (index: number) => {
    setRequestData(data[index]);
    setCurrentIndex(index);
  };
  useEffect(() => {
    const apiUrl = "http://185.255.132.73:8000/operation/";
    const fetchData = async () => {
      try {
        const jsonData = await fetchJsonData(apiUrl, "POST", requestData);
        const basicLineChartOptions: BasicLineChartOptions = {
          grid: {
            left: '15%',
            right: '15%',
            bottom: '5%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: jsonData.xAxis,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: jsonData.series,
              type: 'line',
            },
          ],
        };
        setChartOptions(basicLineChartOptions);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchData();
  }, [requestData]);


  const waterfallChartOptions: WaterfallChartOptions = {
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

  const pieChartOptions: PieChartOptions = {
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
  return (
    <>
      <NavBarSearch />
      <Routes>
        <Route path="/login" element={<LoginPage mode="signin" />} />
        <Route
          path="/charts"
          element={
            <>
              <Carousel
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                selectedItem={currentIndex}
                onChange={handleCarouselChange}
              >
                {
                  data.map(
                    (item, index) => (
                      <div key={index}>
                        <h2>{item}</h2>
                      </div>
                    )
                  )
                }
              </Carousel>
              <BasicLineChartComponent option={bsLineChartOpt} width="100%" height="250px" />
              <WaterfallChartComponent option={waterfallChartOptions} width="100%" height="400px" />
              <PieChartComponent option={pieChartOptions} width="100%" height="400px" />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;