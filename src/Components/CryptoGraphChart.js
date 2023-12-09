import ReactEcharts from "echarts-for-react"; 

export default function CryptoGraphChart({ cryptoGraphData }){

    const option = {
        xAxis: {
          type: 'category',
          data: cryptoGraphData.map((cryptoGraphNames) => {
            return cryptoGraphNames.name
          }),
          axisLabel: {
            interval: 0,
            rotate: 60,
            overflow: 'truncate'
          },
        },
        
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: cryptoGraphData.map((cryptoGraphAvgMarketCap) => {
                return cryptoGraphAvgMarketCap.avgMarketCap
            }),
            type: 'bar'
          }
        ],
      }; 
      return <ReactEcharts option={option} />;
}