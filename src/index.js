const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.port = process.env.PORT || 3000;

try {
    await app.use(bodyParser.json());
    await app.use(bodyParser.urlencoded({ extended: true }));
    await app.use(cors());

    app.listen(app.port, setupORM(process.env.ORM));
    console.log(`App listening on port ${app.port}`);
} catch (error) {
    console.log(`App failed to listen ${app.port}. Error: `, error);
}