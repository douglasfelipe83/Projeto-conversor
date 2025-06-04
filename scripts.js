const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

function changeCurrencyToConvert() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyValueToConvert = document.querySelector(".convert-value-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")


    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImageToConvert.src = "./assets/real.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        
    }
    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }


}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".convert-value-to-convert")//Valor em real//
    const currencyValueConverted = document.querySelector(".convert-value")//outras moedas//

    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinToday = 465607.5

   
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

   
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)