const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(8080, () => console.log('listening at 8080'));

app.use(express.static('CAREYKVA_QUIZ'));
app.use(express.json({ limit: '1mb' }));