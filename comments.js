// Create web server with express
// Create router for comment
// Use comment controller to handle request

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.post('/', commentController.create);
router.get('/', commentController.getAll);
router.get('/:id', commentController.getById);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);

module.exports = router;