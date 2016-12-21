var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('activity', ActivitySchema);
