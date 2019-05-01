const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupORM = require('./config/orm-factory');

const app = express();

app.port = process.env.PORT || 3000;

try {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    app.listen(app.port, setupORM());
    console.log(`App listening on port ${app.port}`);
} catch (error) {
    console.log(`App failed to listen ${app.port}. Error: `, error);
}