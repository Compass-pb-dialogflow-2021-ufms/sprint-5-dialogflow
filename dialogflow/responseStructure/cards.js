const format = JSON.parse(JSON.stringify(
{"fulfillmentMessages": [
    {
        "card": {
            "title": "a",
            "subtitle": "",
            "buttons": []
        }
    },
    {
        "text": {
            "text": [
                ""
            ]
        }
    }
]}))


const cardFormat = {
    "text": "but1"
}

function cards(cardNames)
{
    format.fulfillmentMessages[0].card.buttons.length = 0
	if(typeof cardNames == 'string')
	{
		cardFormat.text = cardNames
		format.fulfillmentMessages[0].card.buttons.push(cardNames)
	}
	else
	{
		for(let i = 0; i < cardNames.length; i++)
		{
			cardFormat.text = cardNames[i]
			let aux = JSON.parse(JSON.stringify(cardFormat))        //this variable is used to
			format.fulfillmentMessages[0].card.buttons.push(aux)   //prevent copy by reference
		}
	}
    // const message = JSON.stringify(format)
    const message = format
    return message
}


module.exports = cards