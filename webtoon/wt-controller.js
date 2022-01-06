// contactController.js
// Import contact model
Mgwt = require('./wt-model');
// Handle index actions
exports.index = function (req, res) {
    Mgwt.get(function (err, mgwt) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "anime details retrieved successfully",
            data: mgwt
        });
    });
};
// Handle create contact actions later
/*exports.new = function (req, res) {
    var new_anime = new anime();
    new_anime.name = req.body.name ? req.body.name : anime.name;
    new_anime.gender = req.body.gender;
    new_anime.email = req.body.email;
    new_anime.phone = req.body.phone;
// save the contact and check for errors
    anime.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};*/
// Handle view contact info
exports.view = function (req, res) {
    Mgwt.findById(req.params.anime_id, function (err, anime) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: anime
        });
    });
};
/*
// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
*/