// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var mgwtSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    wtname: {
        type:String,
        required: true
    },
    ch: {
        type:Number,
        required: true
    },
    img: [String],
    lang: {
        type:String,
        required: true
    }
},{ collection: 'mgwt' });
// Export Contact model
var Contact = module.exports = mongoose.model('mgwt', mgwtSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}