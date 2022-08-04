const express = require('express');

const app = express();

app.all('*', (req, res) => res.status(200).send('Hello Wolrd'));

app.listen(3000, () => console.log('Server is running on 3000'));