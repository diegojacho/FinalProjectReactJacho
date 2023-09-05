const currencyFormater = new Intl.NumberFormat(undefined, {currency: "USD", style:"currency"})

export function setCurrency(number){
    return(
        currencyFormater.format(number)
    )

}