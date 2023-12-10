import { useEffect, useState } from "react";
import CryptoScrapperInputs from "./Components/CryptoScrapperInputs";
import { getCryptocurrencies, getCryptodata } from "./Apis/cryptoData";
import CryptoDataContainer from "./Components/CryptoDataContainer";
import CircularProgress from '@mui/material/CircularProgress';
import "./index.css"

function App() {
  const [ cryptoCurrenciesData, setCryptoCurrenciesData ] = useState(null)
  const [ cryptoCurrenciesList, setCryptoCurrenciesList ] = useState([])
  const [selectedValues, setSelectedValues] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ dateRanges, setDateRanges ] = useState([{
    id: 1,
    startDate: "",
    endDate: ""
  }])

  const handleAddDateRange = () => {
    setDateRanges([...dateRanges, {
      id: dateRanges[dateRanges.length -1].id + 1,
      startDate: "",
      endDate: ""
    }])
  }

  const handleDeletedateRange = (id) => {
    setDateRanges(dateRanges.filter(dateRange => dateRange.id !== id))
  }

  const handleStartDateChange = (e, index) => {
    setDateRanges((prev) => {
      const newDateRanges = [...prev]
      newDateRanges[index].startDate = e.target.value
      return newDateRanges
    })
  }

  const handleEndDateChange = (e, index) => {
    setDateRanges((prev) => {
      const newDateRanges = [...prev]
      newDateRanges[index].endDate = e.target.value
      return newDateRanges
    })
  }

  const handleSelectChange = (event) => {
    console.log(selectedValues);
    if (event.target.value[event.target.value.length - 1] && !selectedValues.includes(event.target.value[event.target.value.length - 1])) {
      setSelectedValues([...selectedValues, event.target.value[event.target.value.length - 1]]);
    }
  };

  const handleRemoveClick = (value) => {
    setSelectedValues(selectedValues.filter((selectedValue) => selectedValue !== value));
  };

  const getCryptocurrenciesData = async () => {
    setErrorMessage("")
    if(!selectedValues.length){
      setErrorMessage("Please select atleast 1 cryptocurrency")
      return
    }
    for(let i = 0; i < dateRanges.length; i++){
      if(!dateRanges[i].startDate || !dateRanges[i].endDate){
        setErrorMessage("Please select dates in all added date ranges")
        return
      }
    }
    setErrorMessage("")
    setIsLoading(true)
    const cryptoData = await getCryptodata(dateRanges, selectedValues)
    if(cryptoData.status === 200){
      setCryptoCurrenciesData(cryptoData.cryptoTableData)
    }
    else{
      setErrorMessage("Failed to Load Data")
    }
    setIsLoading(false)
  }

  const getCryptocurrenciesList = async () => {
    const res = await getCryptocurrencies()
    setCryptoCurrenciesList(res.cryptoCurrencies)
  }

  useEffect(() => {
    getCryptocurrenciesList()
  }, [])

  return (
    <div className="App">
      <h1>Cryptocurrency Prices by Market Cap</h1>
      {errorMessage && <p style={{color: 'red', textAlign: 'center'}} >{errorMessage}</p>}
      <CryptoScrapperInputs handleSelectChange = {handleSelectChange} handleRemoveClick = {handleRemoveClick} selectedValues = {selectedValues} dateRanges = {dateRanges} handleStartDateChange = {handleStartDateChange} handleEndDateChange = {handleEndDateChange} handleAddDateRange = {handleAddDateRange} handleDeletedateRange = {handleDeletedateRange} getCryptocurrenciesData = {getCryptocurrenciesData} cryptoCurrenciesList = {cryptoCurrenciesList} />

      {
      isLoading ?
      <div className="loader-container" ><CircularProgress /></div>
      :
      cryptoCurrenciesData && <CryptoDataContainer cryptoCurrenciesData = {cryptoCurrenciesData} />}
    </div>
  );
}

export default App;