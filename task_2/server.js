'use strict';

// Global START
global.ENV = process.env.NODE_ENV || `development`
global.Sequelize = require(`sequelize`)
global._lib = require(`${__dirname}/apps/libs`)
global._model = require(`${__dirname}/database/models`)
global._LOG_FOLDER = `${__dirname}/logs`

const express = require('express');
const response = require('./core/response.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 3000
const controller = require('./apps/controllers/main')

app.set('x-powered-by', false);
app.use(response)
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(bodyParser.json({
    'strict': false,
    limit: '50mb'
}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000
}))
app.use(morgan('dev'))
app.get('/search', controller.search)
app.get('/detail/:id', controller.detail)
// app.listen(port, '0.0.0.0', function () {
//     console.log("SERVER BERJALAN DI PORT " + port)
// })
module.exports = app.listen(port, '0.0.0.0', function () {
    console.log("SERVER BERJALAN DI PORT " + port)
})