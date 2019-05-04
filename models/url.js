const mongoose = require('mongoose');

// Url schema
const urlSchema = mongoose.Schema({
  urlAddress:{
    type: String,
    required: true
  },
  shortyCode:{
    type: String,
    required: true
  }
});

const Url = module.exports = mongoose.model('Url', urlSchema);
