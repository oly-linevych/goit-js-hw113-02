function formatMessage(message, maxLength) {
    if (message.length > maxLength){
       return  message.slice(0, maxLength)+'...'
    }
    return message
}
console.log(formatMessage("Curabitur ligula sapien", 16))