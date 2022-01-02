function formattingCellNumber(cellNumber)
{
    const digits = cellNumber.replace(/[^\d]/g, "")
    const formattedCellNumber = digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    return formattedCellNumber
}


module.exports = formattingCellNumber