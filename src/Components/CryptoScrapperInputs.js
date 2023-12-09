export default function CryptoScrapperInputs({handleSelectChange, handleRemoveClick, selectedValues, dateRanges, handleStartDateChange, handleEndDateChange, handleAddDateRange}){
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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>

        {
            dateRanges.map((dateRange, index) => {
                return <div key = {index}>
                    <label>Start Date:</label>
                    <input type="date" value={dateRange.startDate} onChange={(e) => handleStartDateChange(e, index)} />
          
                    <label>End Date:</label>
                    <input type="date" value={dateRange.endDate} onChange={(e) => handleEndDateChange(e, index)} />
                </div>
            })
        }
        {dateRanges[dateRanges.length - 1].startDate && dateRanges[dateRanges.length - 1].endDate && <button onClick={handleAddDateRange} >Add Date range</button>}
    </>
}