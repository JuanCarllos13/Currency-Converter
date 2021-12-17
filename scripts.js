const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


//Axios



const convertvalue = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValue = document.getElementById('currency-value-text')
    //realValueText.innerHTML = inputReal
    //currencyValue.innerHTML = inputReal /dolar


    //async await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

   
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: "BRL",
    }).format(inputReal)


    if (select.value === 'US$ Dólar americano') {

        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: "USD",
        }).format(inputReal / dolar)
    }

    if (select.value === '€ Euro') {

        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: "EUR",
        }).format(inputReal / euro)
    }
    if (select.value == 'Bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('BTC', {
            currency: "BTC"
        }).format(inputReal / bitcoin)
    }

}
changecurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar amereciano') {
        currencyName.innerHTML = 'Dólar americanp'
        currencyImg.src = './img/estados-unidos (1) 1.svg'
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/Design sem nome 1.svg'
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/Design sem nome (1) 1.png'
    }
    convertvalue()

}

button.addEventListener('click', convertvalue)
select.addEventListener('change', changecurrency)
