const express = require('express');
const ComController = require('../controllers/ComController');

const router = express.Router();

router.get('/comportamiento', ComController.index);
router.get('/comportamiento/create', ComController.create);
router.post('/comportamiento/create', ComController.store);
router.post('/comportamiento/delete', ComController.destroy);
router.get('/comportamiento/edit/:id', ComController.edit);
router.post('/comportamiento/edit/:id', ComController.update);

module.exports = router;