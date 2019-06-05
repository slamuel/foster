const router = require('express').Router();
const { petController } = require('../controllers');


module.exports = router
    .get('/', petController.index)
    .post('/', petController.create)
    .get('/:pet_id', petController.show)
    .put('/:pet_id', petController.update)
    .delete('/:pet_id', petController.destroy);