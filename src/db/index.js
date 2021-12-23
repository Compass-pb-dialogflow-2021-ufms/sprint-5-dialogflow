const mongoose = require('mongoose')

const conn = mongoose.createConnection("mongodb+srv://climatactdb:climatact123@cluster0.rdf63.mongodb.net/climatact?retryWrites=true&w=majority")

//Model Name, Schema Name, Collection
const User = conn.model('User', require("../schemas/userSchema"))
const Platform = conn.model('Platform', require("../schemas/platformSchema"))

module.exports = {
    User,
    Platform
}

//Creating Models in db folder, requiring schema, and exporting the model from here. Based on mongoose documentation, when using createConnection, to support multiple databases
//it is correct to export schemas to the connection, for it not to be attached to the default collection. 3rd parameter is collection name.