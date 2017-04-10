var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StopSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('stop', StopSchema);
