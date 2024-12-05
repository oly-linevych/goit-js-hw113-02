function checkForSpam(message) {
   const messag = message.toLowerCase()
   return messag.includes('spam') || messag.includes('sale')
}
console.log(checkForSpam("Latest technology news"))
console.log(checkForSpam("Get best sale offers now!"))