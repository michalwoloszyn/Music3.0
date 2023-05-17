const AuctionModel = require('../models/AuctionModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const auction = await AuctionModel.findById(id);

  auction.name = req.body.name;
  auction.author = req.body.author;
  auction.price = req.body.price;
  auction.img = req.body.img;
  auction.music = req.body.music;
  await auction.save();
  res.json(auction);
};
