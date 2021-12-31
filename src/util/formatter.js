const arrayToStringFormatter = (array) => {
    let string = ''

    for (let x = 0; x < array.length; x++) {
        if (x === array.length - 2) {
            string += array[x] + ' e '
        } else if (x === array.length - 1){
            string += array[x]
        } else {
            string += array[x] + ', '
        }
    }

    return string
}

module.exports = {
    arrayToStringFormatter
}