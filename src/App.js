import { useState } from "react";
import CryptoScrapperInputs from "./Components/CryptoScrapperInputs";

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [ dateRanges, setDateRanges ] = useState([{
    startDate: "",
    endDate: ""
  }])

  const handleAddDateRange = () => {
    setDateRanges([...dateRanges, {
      startDate: "",
      endDate: ""
    }])
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

  return (
    <div className="App">
      <CryptoScrapperInputs handleSelectChange = {handleSelectChange} handleRemoveClick = {handleRemoveClick} selectedValues = {selectedValues} dateRanges = {dateRanges} handleStartDateChange = {handleStartDateChange} handleEndDateChange = {handleEndDateChange} handleAddDateRange = {handleAddDateRange} />
    </div>
  );
}

export default App;