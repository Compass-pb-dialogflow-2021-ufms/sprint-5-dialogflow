const format = JSON.parse(JSON.stringify(
    {
        "payload":
            {
                "richContent": [
                [
                    {
                    "options": [],
                    "type": "chips"
                    }
                ]
                ]
            }
    }
))


function formattedChips(chipsNames)
{
    format.payload.richContent[0][0].options.length = 0

    if(typeof text == 'string')
	{
		chipFormat.text = chipsNames
		format.payload.richContent[0][0].options.push(chipFormat)
	}
	else
	{
		for(let i = 0; i < chipsNames.length; i++)
		{
			chipFormat.text = chipsNames[i]
			let aux = JSON.parse(JSON.stringify(chipFormat))     //this variable is used to
			format.payload.richContent[0][0].options.push(aux)  //prevent copy by reference
		}
	}

    // const chips = JSON.stringify(format)
    const chips = format
    return chips
}


module.exports = formattedChips