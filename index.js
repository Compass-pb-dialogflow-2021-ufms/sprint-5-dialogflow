const customExpress = require ('./controller/responses');

const app = customExpress();

app.listen(3000, ()  => {
    console.log("Servidor online na porta 3000")
})