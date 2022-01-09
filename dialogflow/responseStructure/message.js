const format = {"fulfillmentMessages": []}


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

	for(let i = 0; i < text.length; i++)
	{
		messageFormat.text.text = [text[i]]
		let aux = JSON.parse(JSON.stringify(messageFormat))		//this variable is used to
		format.fulfillmentMessages.push(aux)                   //prevent copy by reference
	}
	
	const message = format
	return message
}


module.exports = formattedMessage