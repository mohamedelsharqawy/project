var mongoose = require('mongoose');


var loginSchema = mongoose.Schema({
  username:{
      type:String,
      required:true,
      unique:true

  },
  password:{
    type:String,
    required:true,
    unique:true

  }
});

var Login = mongoose.model("logins", loginSchema);

module.exports = Login;
