const AuctionModel = require('../models/AuctionModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const auction = await AuctionModel.findById(id);
  await auction.remove();
  res.status(204).json(auction);
};
