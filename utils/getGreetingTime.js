function getGreetingTime() {
    const actualHour = new Date().getHours();

    if (actualHour > 0 && actualHour < 12) {
        return 'Tenha um bom dia'
    } else if (actualHour > 12 && actualHour < 18) {
        return 'Tenha uma boa tarde'
    }

    return 'Tenha uma boa noite'
}

module.exports = {
    getGreetingTime
}