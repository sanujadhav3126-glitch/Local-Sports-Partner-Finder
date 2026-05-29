const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const User = require('../models/User');
const Game = require('../models/Game');
const PlayRequest = require('../models/PlayRequest');
router.get('/stats', auth, admin, async (req,res)=>{
  res.json({ users: await User.countDocuments(), games: await Game.countDocuments(), requests: await PlayRequest.countDocuments(), successfulMatches: await PlayRequest.countDocuments({status:'accepted'}) });
});
router.get('/users', auth, admin, async (req,res)=> res.json(await User.find().select('-password').sort('-createdAt')));
router.delete('/users/:id', auth, admin, async (req,res)=>{ await User.findByIdAndDelete(req.params.id); res.json({message:'User deleted'}); });
module.exports = router;
