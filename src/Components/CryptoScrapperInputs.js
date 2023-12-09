export default function CryptoScrapperInputs({handleSelectChange, handleRemoveClick, selectedValues, dateRanges, handleStartDateChange, handleEndDateChange, handleAddDateRange, handleDeletedateRange, getCryptocurrenciesData, cryptoCurrenciesList}){
    return <>
        <div>
            Selected Values:
            {selectedValues.map((value) => (
                <div key={value}>
                {value}
                <button onClick={() => handleRemoveClick(value)}>Remove</button>
                </div>
            ))}
        </div>
        <select multiple value={selectedValues} onChange={handleSelectChange}>
            {
                cryptoCurrenciesList.map((cryptoCurrency, index) => {
                    return <option key = {index} value={cryptoCurrency}>{cryptoCurrency}</option>
                })
            }
        </select>

        {
            dateRanges.map((dateRange, index) => {
                return <div key = {dateRange.id}>
                    <label>Start Date:</label>
                    <input type="date" value={dateRange.startDate} onChange={(e) => handleStartDateChange(e, index)} />
          
                    <label>End Date:</label>
                    <input type="date" value={dateRange.endDate} onChange={(e) => handleEndDateChange(e, index)} />
                    {index !== 0 && <button onClick={() => handleDeletedateRange(dateRange.id)}>Delete Date Range</button>}
                </div>
            })
        }
        {dateRanges[dateRanges.length - 1].startDate && dateRanges[dateRanges.length - 1].endDate && <button onClick={handleAddDateRange} >Add Date range</button>}
        <button onClick={getCryptocurrenciesData} >Get Cryptocurrencies Data</button>
    </>
}