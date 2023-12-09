import { useEffect, useState } from "react";
import CryptoScrapperInputs from "./Components/CryptoScrapperInputs";
import { getCryptocurrencies, getCryptodata } from "./Apis/cryptoData";
import CryptoDataContainer from "./Components/CryptoDataContainer";

function App() {
  const [ cryptoCurrenciesData, setCryptoCurrenciesData ] = useState(null)
  const [ cryptoCurrenciesList, setCryptoCurrenciesList ] = useState([])
  const [selectedValues, setSelectedValues] = useState([]);
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
    if (event.target.value && !selectedValues.includes(event.target.value)) {
      setSelectedValues([...selectedValues, event.target.value]);
    }
  };

  const handleRemoveClick = (value) => {
    setSelectedValues(selectedValues.filter((selectedValue) => selectedValue !== value));
  };

  const getCryptocurrenciesData = async () => {
    if(!selectedValues.length){
      console.log("Failed...");
      return
    }
    for(let i = 0; i < dateRanges.length; i++){
      if(!dateRanges[i].startDate || !dateRanges[i].endDate){
        console.log("Failed...");
        return
      }
    }
    const cryptoData = await getCryptodata(dateRanges, selectedValues)
    console.log(cryptoData);
    setCryptoCurrenciesData(cryptoData.cryptoTableData)
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
      <CryptoScrapperInputs handleSelectChange = {handleSelectChange} handleRemoveClick = {handleRemoveClick} selectedValues = {selectedValues} dateRanges = {dateRanges} handleStartDateChange = {handleStartDateChange} handleEndDateChange = {handleEndDateChange} handleAddDateRange = {handleAddDateRange} handleDeletedateRange = {handleDeletedateRange} getCryptocurrenciesData = {getCryptocurrenciesData} cryptoCurrenciesList = {cryptoCurrenciesList} />

      {cryptoCurrenciesData && <CryptoDataContainer cryptoCurrenciesData = {cryptoCurrenciesData} />}
    </div>
  );
}

export default App;