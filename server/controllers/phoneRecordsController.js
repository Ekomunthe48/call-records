const RecordCalls = require('../models/record')

class RecordController {
    static async findAll (req, res, next) {
        try {
            const recordCalls = await RecordCalls.find()
            res.status(200).json(recordCalls);
        } catch (error) {
            res.status(400).json({status: 'HTTP 400 Bad Request'})
        }
    }

    static async findOne (req, res, next) {
        let id = req.params.id
        try {
            const recordCalls = await RecordCalls.findOne(id)
            res.status(200).json({status: 'HTTP 200 OK', recordCalls});
        } catch (error) {
            res.status(400).json({status: 'HTTP 400 Bad Request'})
        }
    }

    static async insertOne (req, res, next) {
        let payload = req.body
        try {
            const newRecord = await RecordCalls.insertOne(payload)
            res.status(200).json(newRecord)
        } catch (error) {
            res.status(400).json({status: 'HTTP 400 Bad Request'})
        }
    }

}

module.exports = RecordController