import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

export default function CryptoTable({ cryptoTableData }){
    return <>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{width: '750px', margin: '10px'}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Average Market Cap</StyledTableCell>
            <StyledTableCell align="right">Average Price</StyledTableCell>
            <StyledTableCell align="right">Maximum Market Cap</StyledTableCell>
            <StyledTableCell align="right">Maximum Price</StyledTableCell>
          </TableRow>
        </TableHead>
            
        <TableBody>
          {cryptoTableData.map((cryptoTableRow, index) => (
            <StyledTableRow key={cryptoTableRow.name}>
              <StyledTableCell component="th" scope="row">
                {cryptoTableRow.name}
              </StyledTableCell>
              <StyledTableCell align="right">${cryptoTableRow.avgMarketCap}</StyledTableCell>
              <StyledTableCell align="right">${cryptoTableRow.avgPrice}</StyledTableCell>
              <StyledTableCell align="right">${cryptoTableRow.maxMarketCap}</StyledTableCell>
              <StyledTableCell align="right">${cryptoTableRow.maxPrice}</StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
        </Table>
    </>
}