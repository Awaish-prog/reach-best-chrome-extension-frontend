const url = "http://localhost:4040/"

export const getCryptodata = async (dateRanges, cryptoCurrencies) => {
    const response = await fetch(`${url}getCryptoData`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
            dateRanges, cryptoCurrencies
        })
    })
    return await response.json()
}

export const getCryptocurrencies = async () => {
    const response = await fetch(`${url}getAvailableCryptoCurrencies`)
    return await response.json()
}