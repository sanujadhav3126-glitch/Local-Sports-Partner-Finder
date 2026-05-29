const router = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/profile', auth, async (req,res)=>{
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});
router.put('/profile', auth, async (req,res)=>{
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {new:true}).select('-password');
  res.json(user);
});
router.get('/search', auth, async (req,res)=>{
  const { game, city, area, skillLevel } = req.query;
  const q = { _id: { $ne: req.user.id } };
  if(game) q.preferredGames = game;
  if(city) q['location.city'] = new RegExp(city, 'i');
  if(area) q['location.area'] = new RegExp(area, 'i');
  if(skillLevel) q.skillLevel = skillLevel;
  const users = await User.find(q).select('-password').limit(50);
  res.json(users);
});
module.exports = router;
