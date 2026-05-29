const router = require('express').Router();
const auth = require('../middleware/auth');
const PlayRequest = require('../models/PlayRequest');
router.post('/', auth, async (req,res)=>{
  const data = await PlayRequest.create({ ...req.body, sender:req.user.id });
  res.status(201).json(data);
});
router.get('/mine', auth, async (req,res)=>{
  const data = await PlayRequest.find({ $or:[{sender:req.user.id},{receiver:req.user.id}] })
    .populate('sender','name email location').populate('receiver','name email location').sort('-createdAt');
  res.json(data);
});
router.put('/:id/status', auth, async (req,res)=>{
  const item = await PlayRequest.findById(req.params.id);
  if(!item) return res.status(404).json({message:'Request not found'});
  if(item.receiver.toString() !== req.user.id) return res.status(403).json({message:'Only receiver can update'});
  item.status = req.body.status;
  await item.save(); res.json(item);
});
module.exports = router;
