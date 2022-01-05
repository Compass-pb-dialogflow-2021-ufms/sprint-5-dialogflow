const format = JSON.parse(JSON.stringify({"fulfillmentMessages": []}))


const messageFormat = 
{
	"text": {
	  "text": [
		"Text response from webhook"
	  ]
	}
}



function formattedMessage(text)
{
	format.fulfillmentMessages.length = 0
	if(typeof text == 'string')
	{
		messageFormat.text.text = [text]
		format.fulfillmentMessages.push(messageFormat)
	}
	else
	{
		for(let i = 0; i < text.length; i++)
		{
			messageFormat.text.text = [text[i]]
			let aux = JSON.parse(JSON.stringify(messageFormat))  //this variable is used to
			format.fulfillmentMessages.push(aux)                //prevent copy by reference
		}
	}
    // const message = JSON.stringify(format)
    const message = format
    return message
}


module.exports = formattedMessage