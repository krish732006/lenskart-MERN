const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  rid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  pname: String,
  size: String,
  price: Number,
  gst: Number,
  type: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
