function getShippingCost(country) {
    let message = "Sorry, there is no delivery to your country"
    
    let prise 
    switch (country) {
        case 'China' :
        prise = 100
        message = `Shipping to ${country} will cost ${prise} credits`
        break
        case 'Chile' :
            prise = 250
            message = `Sipping to ${country} will cost ${prise} credits`
            break
    }
    console.log(message)
    return message
}

(getShippingCost("Germany"));
(getShippingCost("China"))