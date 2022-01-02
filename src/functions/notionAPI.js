const { Client } = require('@notionhq/client');
const config = require('config');

const notion = new Client({
    auth: config.get( 'notion.key' ),
});

async function create(name, phone, email, cpf, desc) { //Creates entry using NotionAPI client
    const response = await notion.pages.create({
    parent: {
        database_id: config.get( 'notion.db' ),
    },
        properties: {
            "Nome": {
            title: [ {
                text: {
                    content: name,
                },
                }, ],
            },
            "Descrição do Problema": {
                rich_text: [ {
                        text: {
                            content: desc,
                        },
                }, ],
            },
            "CPF": {
                rich_text: [ {
                        text: {
                            content: cpf,
                        },
                }, ],
            },
            "Telefone": {
                phone_number: phone,
            },
            "Email": {
                email: email,
            },

        },
    });
}

module.exports = {
    create
}
