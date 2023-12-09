export default function CryptoTable({ cryptoTableData }){
    return <>
        <table>
            <thead>
                <th>Name</th>
                <th>Average Market Cap</th>
                <th>Average Price</th>
                <th>Maximum Market Cap</th>
                <th>Maximum Price</th>
            </thead>
            <tbody>
                {
                    cryptoTableData.map((cryptoTableRow, index) => {
                        return <tr key = {index}>
                            <td>{cryptoTableRow.name}</td>
                            <td>{cryptoTableRow.avgMarketCap}</td>
                            <td>{cryptoTableRow.avgPrice}</td>
                            <td>{cryptoTableRow.maxMarketCap}</td>
                            <td>{cryptoTableRow.maxPrice}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}