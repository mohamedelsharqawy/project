 mongoose = require('mongoose');


var registrationSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, index: { unique: true }}
});

var registers = mongoose.model("registers", registrationSchema);

module.exports = registers;
