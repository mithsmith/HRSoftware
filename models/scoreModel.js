const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
  interviewer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Interviewer',
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'Student',
  },
  scores: {
    type: Object,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const Score = mongoose.model('Score', ScoreSchema, 'Scores');
module.exports = Score;
