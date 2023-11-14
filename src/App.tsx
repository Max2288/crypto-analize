import NavBarSearch from "actions/components/Navbar/NavbarSerach";
import SinglePage from "actions/components/SinglePage/SinglePage";
import BasicLineChartComponent, { BasicLineChartOptions } from 'actions/components/Charts/BasicLineChart/BasicLineChart';
import WaterfallChartComponent from 'actions/components/Charts/WaterfallChart/WaterfallChart';
import PieChartComponent from 'actions/components/Charts/PieChart/PieChart';
import { useState, useEffect } from "react";
import LoginComponent from "actions/components/LoginAuth/LoginComponent";
import RegisterComponent from "actions/components/LoginAuth/RegisterComponent";
import { Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { fetchJsonData } from "actions/utils/post";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {data, pieChartOptions, waterfallChartOptions } from "data";


function App() {
  const dataKeys = Object.keys(data)
  const [requestData, setRequestData] = useState(dataKeys[0])
  const [bsLineChartOpt, setChartOptions] = useState<BasicLineChartOptions>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiUrl = "https://seagulltech.ru/data/operation/";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
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
    setRequestData(dataKeys[index]);
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
              >
                {
                  Object.values(data).map((value, index) => (
                    <div key={index}>
                      <h2>{value}</h2>
                    </div>
                  ))
                }
              </Carousel>
              <BasicLineChartComponent option={bsLineChartOpt} width="100%" height="250px" />
              <WaterfallChartComponent option={waterfallChartOptions} width="100%" height="400px" />
              <PieChartComponent option={pieChartOptions} width="100%" height="400px" />
            </>
          }
        />
        <Route path="/" element={<SinglePage/>} />
      </Routes>
    </>
  );
}

export default App;