const { ObjectId } = require('mongodb')
const { getDb } = require('../config/mongoDB')

class RecordCalls {
    static find() {
        return getDb().collection('recordCards').find().toArray()
    }
    static findOne(id) {
        return getDb().collection('recordCards').findOne({_id: ObjectId(id)})
    }
    static insertOne(payload) {
        return getDb().collection('recordCards').insertOne(payload)
    }
}

module.exports = RecordCalls