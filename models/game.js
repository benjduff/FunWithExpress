const mongoose = require('mongoose');

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

const Game = module.exports = mongoose.model('Game', gameSchema);

//add game to db
module.exports.addGame = function(newGame, callback){
    // if(err) throw err;
    newGame.save(callback);
}
