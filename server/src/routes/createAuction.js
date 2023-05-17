const AuctionModel = require('../models/AuctionModel');

module.exports = async (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const price = req.body.price;
  const address = req.body.address;
  const img = req.body.img;
  const music = req.body.music;
  console.log(req.body);
  const auction = new AuctionModel({
    name,
    author,
    price,
    address,
    img,
    music,
  });

  const newAuction = await auction.save();
  res.json(newAuction);
};
