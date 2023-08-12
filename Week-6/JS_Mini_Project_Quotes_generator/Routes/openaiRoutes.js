const express =  require('express');
const {generateQuotes} = require('../Controllers/openaiController');
const router = express.Router();
router.post('/generateQuotes',generateQuotes);

module.exports = router;