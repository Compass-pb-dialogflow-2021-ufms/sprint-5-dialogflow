const format = {"fulfillmentMessages": []}


const messageFormat = 
{
	"text": {
	  "text": [
		"Text response from webhook"
	  ]
	},
	platform: "TELEGRAM"
}


const quickRepliesFormat =
{
    quickReplies: 
    {
        title: "",
        quickReplies: [],
    },
    platform: "TELEGRAM",
}


function messageWithQuickReplies(text, quickRepliesOptions)
{
	console.log(text)
    format.fulfillmentMessages.length = 0

	for(let i = 0; i < text.length - 1; i++)
	{
		messageFormat.text.text = [text[i]]
		let aux = JSON.parse(JSON.stringify(messageFormat))		//this variable is used to
		format.fulfillmentMessages.push(aux)                   //prevent copy by reference
	}
	
    const quickReplies = quickRepliesFormat
    quickReplies.quickReplies.title = text[text.length - 1]
    quickReplies.quickReplies.quickReplies = quickRepliesOptions

	const message = format
    message.fulfillmentMessages.push(quickReplies)
	return message
}


module.exports = messageWithQuickReplies