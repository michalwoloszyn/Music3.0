const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
  name: { type: String },
  author: { type: String },
  price: { type: String },
  address: { type: String },
  img: { type: String },
  music: { type: String },
});

const AuctionModel = mongoose.model('Auction', AuctionSchema);

module.exports = AuctionModel;
