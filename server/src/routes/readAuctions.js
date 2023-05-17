const AuctionModel = require('../models/AuctionModel');

module.exports = async (req, res) => {
  const { address } = req.params;
  console.log(address);
  if (address) {
    const auctions = await AuctionModel.find({ address: address });
    res.json(auctions);
  } else {
    const auctions = await AuctionModel.find();
    res.json(auctions);
  }
};
