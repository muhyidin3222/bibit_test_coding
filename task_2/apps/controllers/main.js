"use strict"

const omdbapi = require("../libs/omdbapi")

exports.search = async (req, res, next) => {
    const { text } = req.query
    try {
        const respone = await omdbapi.get(`&s=${text}`)
        if (respone.data.Response == 'False') {
            res.error(respone.data)
        } else {
            res.success(respone.data.Search)
        }
    } catch (error) {
        res.error(error)
    }
}


exports.detail = async (req, res, next) => {
    const { id } = req.params
    try {
        const respone = await omdbapi.get(`&i=${id}`)
        if (respone.data.Response == 'False') {
            res.error(respone.data)
        } else {
            res.success(respone.data)
        }
    } catch (error) {
        res.error(error)
    }
}