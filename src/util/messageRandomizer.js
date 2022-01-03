const messageRandomizer = (messages, quantity) => {
    const max = quantity - 1
    const min = 0
    const index = Math.round(Math.random() * (max - min)) + min

    return messages[index]
}

module.exports = {
    messageRandomizer
}
