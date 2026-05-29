const mongoose = require('mongoose');
const communitySchema = new mongoose.Schema({
  name: String, area: String, city: String, organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, verified: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Community', communitySchema);
