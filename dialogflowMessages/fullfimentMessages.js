function fulfillmentMessages(text1, text2){
    let message = {"fulfillmentMessages": [
        {
            "text": {
                "text": [
                    text1
                ]
            },
        },
        {
            "text": {
                "text": [
                    text2   
                ]
            },
        }
    ]}

    return message
}


module.exports = fulfillmentMessages