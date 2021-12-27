const dateFns = require('date-fns');


function formatDate(dateTime) {

    const data = dateFns.parse(dateTime, 'yyyy-MM-dd', new Date());
    const correctDate = dateFns.format(data, 'dd/MM/yyyy');

    return correctDate;
}

module.exports = {
    formatDate
}