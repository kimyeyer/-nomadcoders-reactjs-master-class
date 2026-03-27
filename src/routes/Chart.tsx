import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useThemeMode } from "../ThemeContext";

interface IHistorical {
  time_open: string; //기간 시작 시간
  time_close: string; //기간 종료 시간
  open: number; //시작가
  high: number; //하루의 가장 높은 가격
  low: number; //하루의 가장 낮은 가격
  close: number; //종가
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const themeMode = useThemeMode();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId), {
        // refetchInterval: 10000,
    }
  );
//   [open,high,low,close]
  return (
    <div>
        {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
            //   name: "Price",
              data: data?.map((price) => {
                return {x: new Date(price.time_close), y: [price.open, price.high, price.low, price.close]}
            })  
            },
          ]}
          options={{
            theme: {
              mode: themeMode.isDark? "dark" : "light",
            },
            chart: {
                type: "candlestick",
                height: 350,
                width: 500,
                toolbar: {
                    show: false,
                },
                background: "transparent",
            },
            title:{
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
          }}
        />
      )}
      {/* {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill:{
                type: "gradient",
                gradient: {gradientToColors: ["#0be881"], stops: [0,100]}
            },
            colors: ["#0fbcf9"],
            tooltip:{
                y:{
                    formatter: (value) => `$${value.toFixed(3)}`
                }
            }
          }}
        />
      )} */}
    </div>
  );
}

export default Chart;