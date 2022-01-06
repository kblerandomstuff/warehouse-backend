// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var animeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    romaji: {
        type:String,
        required: true
    },
    star: {
        type:String,
        required: true
    },
    anidb: {
        type:String,
        required: true
    },
    wiki: {
        type:String,
        required: true
    },
    age_rating: {
    type:String,
        required: true
    },
    cn_name: {
        type:String,
        required: true
    },
    date_added: {
    type: Date,
    default: Date.now
    },
    jp_name: {
    type:String,
        required: true
    },
    path: [String],
    link: [String],
    team: [String],
    type: [String],
    k_com: String,
    k_typ: String
},{ collection: 'anime' });
// Export Contact model
var Contact = module.exports = mongoose.model('anime', animeSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}