const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

async function getSmartzones() {
    const response = await fetch(apiBase)
    const data = await response.json()
    //return data.data
    
    renderSmartzones(data.data)
}

