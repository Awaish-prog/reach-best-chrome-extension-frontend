import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import "../CSS/cryptoContainer.css"

export default function CryptoScrapperInputs({handleSelectChange, handleRemoveClick, selectedValues, dateRanges, handleStartDateChange, handleEndDateChange, handleAddDateRange, handleDeletedateRange, getCryptocurrenciesData, cryptoCurrenciesList}){
    return <>
        <h2>Select Cryptocurrencies</h2>
        <div className='crypto-list-container'>
        <Paper elevation={3} style={{ padding: '10px', marginLeft: '16px', width: '550px', height: '100px', overflow: 'scroll', display: 'flex', flexWrap: 'wrap' }}>
            {
            selectedValues.length ?
            selectedValues.map((value, index) => (
                <div className="selected-crypto-item" key={index}>
                    <Chip label={value} onDelete={() => handleRemoveClick(value)} variant="filled" color="primary" />
                </div>
            )) :
            "Select crypto currencies from the dropdown menu on the right side.."
            }
        </Paper>
        <FormControl fullWidth>
        <InputLabel id="multiple-select-label">Select Cryptocurrencies</InputLabel>
        <Select labelId="multiple-select-label" id="multiple-select" multiple value={selectedValues} onChange={handleSelectChange} label="Select Cryptocurrencies" style={{width: '400px'}}>
            {
                cryptoCurrenciesList.map((cryptoCurrency, index) => {
                    return <MenuItem key = {index} value={cryptoCurrency} >{cryptoCurrency}</MenuItem>
                })
            }
        </Select>
        </FormControl>
        </div>
        <div>
        <h2>Select Date Ranges</h2>
        <div className='date-ranges-input-container'>
        {
            dateRanges.map((dateRange, index) => {
                return <div key = {dateRange.id} className='date-ranges-input'>
                    <label>Start Date:</label>
                    <input type="date" value={dateRange.startDate} onChange={(e) => handleStartDateChange(e, index)} />
                    
                    <label>End Date:</label>
                    <input type="date" value={dateRange.endDate} onChange={(e) => handleEndDateChange(e, index)} />
                    {index !== 0 && <div className='close-icon' onClick={() => handleDeletedateRange(dateRange.id)}><IoMdClose color='white' size={20} /></div>}
                </div>
            })
        }
        </div>
        {dateRanges[dateRanges.length - 1].startDate && dateRanges[dateRanges.length - 1].endDate && <div className='plus-icon' onClick={handleAddDateRange}><FaPlus size={20} color='white' /></div>}
        </div>
        <Button onClick={getCryptocurrenciesData} variant="contained" style={{display: 'block', margin: '10px auto'}} >Get Cryptocurrencies Data</Button>
    </>
}