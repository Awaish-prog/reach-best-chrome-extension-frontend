import CryptoGraphChart from "./CryptoGraphChart"
import CryptoTable from "./CryptoTable"

export default function CryptoDataContainer({ cryptoCurrenciesData }){
    return <>
        {
            Object.keys(cryptoCurrenciesData).map((dateHeading, index) => {
                return <div key = {index}> 
                    <h2>{dateHeading}</h2>
                    <CryptoTable cryptoTableData = {cryptoCurrenciesData[dateHeading]} />
                    <CryptoGraphChart cryptoGraphData = {cryptoCurrenciesData[dateHeading]} />
                </div>
            })
        }
    </>
}