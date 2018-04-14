const express = require('express');
const router = express.Router();
const config = require('../config/db');
const Game = require('../models/game');

//get all games from 'games' collection

router.get('/', (req, res, next) => {
  Game.getAllGames((err, doc) => {
    if (err) {
      res.json({success: false, msg: 'There was an error getting the games: ' + err});
    }else {
      res.json({
        success: true,
        games: doc
      });
    }
  });
})

//create new Game
router.post('/create', (req, res, next) => {
  let newGame = new Game({
    pot: req.body.pot,
    prevWinner: req.body.prevWinner,
    startTime: req.body.startTime,
    endTime: req.body.endTime
  });
  const pot = newGame.pot;

  Game.addGame(newGame, (err, game) => {
    if (err) res.json({success: false, msg: 'There was an error creating the game: ' + err});
  });

  Game.getGameByPot(pot, (err, game) =>{
    if(err) throw err;
    if (!game) {
      res.json({success: false, msg: 'Game not found'});
    }else {
      res.json({
        success: true,
        game: {
          _id: game._id,
          pot: game.pot,
          prevWinner: game.prevWinner,
          startTime: game.startTime,
          endTime: game.endTime
        }
      });
    }
  });
})

module.exports = router;
