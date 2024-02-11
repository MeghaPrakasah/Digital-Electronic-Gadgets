//not found

const { response } = require("express")
const notFound = (req,res,next)=>{
    const error = new Error(`Not Found : ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode == 200 ? 500 :res.statusCode
    req.status(statusCode)
    response.json({
        message: err?.message,
        stack:err?.stack
    })
}

module.exports={errorHandler,notFound}