const router = require('express').Router();
const auth = require('../middleware/auth');
const Game = require('../models/Game');
router.get('/', auth, async (req,res)=> res.json(await Game.find().sort('name')));
router.post('/seed', async (req,res)=>{
  const games = [
    {name:'Chess',type:'indoor'}, {name:'Carrom',type:'indoor'}, {name:'Cards',type:'indoor'},
    {name:'Badminton',type:'outdoor'}, {name:'Table Tennis',type:'indoor'}, {name:'Cricket',type:'outdoor'}
  ];
  await Game.deleteMany({}); await Game.insertMany(games); res.json({message:'Games seeded'});
});
module.exports = router;
