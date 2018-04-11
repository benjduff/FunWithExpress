const express = require('express');
const router = express.Router();
const config = require('../config/db');
const Game = require('../models/game');

//get Game


//create new Game
router.post('/create', (req, res, next) => {
  let newGame = new Game({
    pot: req.body.pot,
    startTime: req.body.startTime,
    endTime: req.body.endTime
  });

  Game.addGame(newGame, (err, game) => {
    if (err) {
      res.json({success: false, msg: 'There was an error creating the game: ' + err});
    } else {
      res.json({success: true, msg: 'New game has been added'});
    }
  })
})

module.exports = router;
