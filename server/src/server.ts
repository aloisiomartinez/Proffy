import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json({
        nome: 'aloisio'
    })
})

app.listen(3333);