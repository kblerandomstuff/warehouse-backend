// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
var animecontroller = require('./anime/anime-controller');
// Contact routes
router.route('/anime')
    .get(animecontroller.index)
   // .post(animecontroller.new);

router.route('/anime/:contact_id')
    .get(animecontroller.view)
   // .patch(animecontroller.update)
  //  .put(animecontroller.update)
   // .delete(animecontroller.delete);
// Export API routes
module.exports = router;