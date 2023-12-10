import ReactEcharts from "echarts-for-react";
import "../CSS/cryptoContainer.css" 

export default function CryptoGraphChart({ cryptoGraphData }){

    const option = {
        xAxis: {
          type: 'category',
          data: cryptoGraphData.map((cryptoGraphNames) => {
            return cryptoGraphNames.name
          }),
          axisLabel: {
            interval: 0,
            rotate: 30,
            overflow: 'truncate'
          },
        },
        
        yAxis: {
          type: 'value',
          axisLabel: {
            interval: 0,
            rotate: 50,
            overflow: 'truncate',
          },
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
      return <div className="graph-container">
        <h3>Average Market Caps($)</h3>
        <ReactEcharts option={option} />
      </div>
}