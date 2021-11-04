const logged = _model.logged

module.exports = (req) => {
    const endpoint = req.originalUrl
    const { body } = req
    const parameters = Object.keys(body).length ? JSON.stringify(body) : null
    const dataReturn = {
        endpoint,
        parameters,
    }
    logged.create(dataReturn)
}