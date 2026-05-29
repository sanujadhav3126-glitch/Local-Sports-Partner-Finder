const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({ name: { type: String, required: true }, type: { type: String, enum: ['indoor','outdoor'], required: true } }, { timestamps: true });
module.exports = mongoose.model('Game', gameSchema);
