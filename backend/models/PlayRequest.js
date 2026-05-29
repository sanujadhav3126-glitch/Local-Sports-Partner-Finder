const mongoose = require('mongoose');
const playRequestSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game: String,
  location: String,
  playDate: String,
  message: String,
  status: { type: String, enum: ['pending','accepted','declined'], default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('PlayRequest', playRequestSchema);
