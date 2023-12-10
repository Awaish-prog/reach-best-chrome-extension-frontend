import { useState } from "react";
import CryptoGraphChart from "./CryptoGraphChart"
import CryptoTable from "./CryptoTable"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "../CSS/cryptoData.css"

export default function CryptoDataContainer({ cryptoCurrenciesData }){
    const [ view, setView ] = useState("table")

    const handleChange = (event, newAlignment) => {
        setView(newAlignment);
      };

    return <>
        <div className="table-graph-toggle">
        <ToggleButtonGroup color="primary" value={view} exclusive onChange={handleChange}>
            <ToggleButton value="table">Table View</ToggleButton>
            <ToggleButton value="graph">Graph View</ToggleButton>
        </ToggleButtonGroup>
        </div>
        {
            Object.keys(cryptoCurrenciesData).map((dateHeading, index) => {
                return <div key = {index}> 
                    <h2>{dateHeading}</h2>
                    {
                        view === "table" ?
                        <CryptoTable cryptoTableData = {cryptoCurrenciesData[dateHeading]} /> :
                        <CryptoGraphChart cryptoGraphData = {cryptoCurrenciesData[dateHeading]} />
                    }
                    
                </div>
            })
        }
    </>
}