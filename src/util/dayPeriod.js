const periodGreeting = () => {
    let text

    const date = new Date().getHours()
    date < 12 ? text = 'um bom dia' : date < 18 ? text = 'uma boa tarde' : text = 'uma boa noite'

    return text
}

module.exports = {
    periodGreeting
}