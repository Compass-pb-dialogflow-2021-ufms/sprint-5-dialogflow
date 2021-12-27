function translateCondition(weatherCondition) {
    switch (weatherCondition) {
        case 'Clear':
            return 'Limpo'
        case 'Cloudy':
            return 'Nublado'
        case 'Partially cloudy':
            return 'Parcialmente nublado'
        case 'Rain, Partially cloudy':
            return 'Chuva, parcialmente nublado'
        case 'Rain, Overcast':
            return 'Chuva, nublado'
        default:
            return weatherCondition;
    }
}

module.exports = {
    translateCondition
}