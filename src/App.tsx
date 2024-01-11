import NavBarSearch from "actions/components/Navbar/NavbarSerach";
import SinglePage from "actions/components/SinglePage/SinglePage";
import BasicLineChartComponent, { BasicLineChartOptions } from 'actions/components/Charts/BasicLineChart/BasicLineChart';
import WaterfallChartComponent, { WaterfallChartOptions} from 'actions/components/Charts/WaterfallChart/WaterfallChart';
import PieChartComponent, { PieChartOptions, PieChartData } from 'actions/components/Charts/PieChart/PieChart';
import { useState, useEffect, CSSProperties } from "react";
import LoginComponent from "actions/components/LoginAuth/LoginComponent";
import RegisterComponent from "actions/components/LoginAuth/RegisterComponent";
import { Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { fetchJsonData } from "actions/utils/post";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { data, dataTranslate } from "data";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function App() {
  const [requestData, setRequestData] = useState(data[0])
  const [bsLineChartOpt, setChartOptions] = useState<BasicLineChartOptions>({});
  const [pChartOpt, setPieChartOptions] = useState<PieChartOptions>({});
  const [wfChartOpt, setWaterfallChartOptions] = useState<WaterfallChartOptions>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  };
  interface ArrowButtonProps {
    onClickHandler: () => void; // Specify the type of onClickHandler prop
    label: string;
    direction: string;
  }
  
  const ArrowButton: React.FC<ArrowButtonProps> = ({ onClickHandler, label, direction }) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{
        ...arrowStyles,
        [direction]: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '50%',
      }}
    >
      {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );

  useEffect(() => {
    const apiUrl = "https://seagulltech.ru/data/operation/";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

    const fetchPieData = async () => {
      try {
        const jsonData = await fetchJsonData("https://seagulltech.ru/data/products/", "POST", "", headers);
        const data: [PieChartData] = jsonData.data
        const pieChartOptions: PieChartOptions = {
          backgroundColor: '#2c343c',
          title: {
            text: 'Товары на складе',
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
            min: 600,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: 'Количество, шт.',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: data.sort(function (a, b) {
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
                shadowColor: 'rgba(0, 0, 0, 1.5)'
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: () => Math.random() * 200
            }
          ]
        };
        setPieChartOptions(pieChartOptions);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
    fetchPieData();

    const fetchWaterfallData = async () => {
      try {
        const jsonData = await fetchJsonData("https://seagulltech.ru/data/waterfall/", "POST", "", headers);
        const waterfallChartOptions: WaterfallChartOptions = {
          title: {
            text: 'Прибыль',
            subtext: 'Каждый месяц',
            padding: 20,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params: any) {
              var tar = params[0];
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '6%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: jsonData.xAxis
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Значение',
              type: 'bar',
              stack: 'Total',
              label: {
                show: true,
                position: 'inside'
              },
              data: jsonData.series
            }
          ]
        }
        setWaterfallChartOptions(waterfallChartOptions);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
    fetchWaterfallData();

    const fetchData = async () => {
      try {
        const jsonData = await fetchJsonData(
          apiUrl,
          "POST",
          {'operation_type': requestData}, 
          headers
        );
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

  const handleCarouselChange = (index: number): void => {
    setRequestData(data[index]);
    setCurrentIndex(index);
  };



  return (
    <>
      <NavBarSearch />
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
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
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && <ArrowButton onClickHandler={onClickHandler} label={label} direction="right" />
                }
                
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && <ArrowButton onClickHandler={onClickHandler} label={label} direction="left" />
                }
              >
                {
                  data.map(
                    (item: string, index) => (
                      <div key={index}>
                        <h2>{dataTranslate[index]}</h2>
                      </div>
                    )
                  )
                }
              </Carousel>
              <BasicLineChartComponent option={bsLineChartOpt} width="100%" height="250px" />
              <WaterfallChartComponent option={wfChartOpt} width="100%" height="400px" />
              <PieChartComponent option={pChartOpt} width="100%" height="400px" />
            </>
          }
        />
        <Route path="/" element={<SinglePage/>} />
      </Routes>
    </>
  );
}

export default App;