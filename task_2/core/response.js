'use strict';

const saveLog = _lib('saveLog')

module.exports = async (req, res, next) => {

    res.success = (data, statusCode = 200) => {
        res.status(statusCode).json({
            status: 'success',
            statusCode: statusCode,
            payload: data || {}
        });
        saveLog(req)
    }

    res.error = (message, statusCode = 500) => {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            payload: message
        })
    }

    next();
}