const mongoose = require('mongoose');

//create game schema
const gameSchema = mongoose.Schema({
  pot: {
    type: Number,
    required: true
  },
  prevWinner: {
    type: String
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  users: {
    type: Array
  }
})

//export game schema as model 'Game'
const Game = module.exports = mongoose.model('Game', gameSchema);

//get all games
module.exports.getAllGames = function(callback){
  Game.find({}, callback);
}

//get game from db by pot amount (will change later to ID, just testing for now)
module.exports.getGameByPot = function(pot, callback){
  const query = {pot: pot};
  Game.findOne(query, callback);
}

//add game to db
module.exports.addGame = function(newGame, callback){
    newGame.save(callback);
}
