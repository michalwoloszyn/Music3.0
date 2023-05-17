const express = require('express');
const router = express.Router();

const createAuction = require('./routes/createAuction');
const readAuctions = require('./routes/readAuctions');
const updateAuction = require('./routes/updateAuction');
const deleteAuction = require('./routes/deleteAuction');

router.get('/home', readAuctions);
router.get('/home/:address', readAuctions);
router.post('/sell', createAuction);
router.put('/sell/:id', updateAuction);
router.delete('/sell/:id', deleteAuction);

module.exports = router;
