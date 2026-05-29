const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user','organizer','admin'], default: 'user' },
  gender: { type: String, default: 'Women' },
  phone: String,
  location: { area: String, city: String, pincode: String },
  preferredGames: [{ type: String }],
  skillLevel: { type: String, enum: ['beginner','intermediate','advanced'], default: 'beginner' },
  availability: [{ day: String, time: String }],
  playingLocations: [{ type: String }]
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
