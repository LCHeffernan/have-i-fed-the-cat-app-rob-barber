const app = require('./src/app');

const APP_PORT = 3000;

app.post('/cats', (req, res) => {
    const { body } = req;
    res.status(201).json(body)
})

app.listen(APP_PORT, () => console.log(`Cats app is listening on localhost:${APP_PORT}`));