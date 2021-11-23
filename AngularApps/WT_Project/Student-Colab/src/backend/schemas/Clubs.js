const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  id: {type: Number, required:true},
  club_name: { type: String, required: true},
  club_head_email: { type: String, required: false}
});

var Club = mongoose.model("Club", ClubSchema);

module.exports = Club;