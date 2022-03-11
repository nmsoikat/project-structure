const factory = require("./factoryHandler");

const {User} = require('./User')

const user = new User;

// create
// (req, res, next) => {
  user.fieldSet = {name: "rohim", email: "rohim@gmail.com", password: "123abc"};

  factory.set(user)
//}


// read
// (req, res, next) => {
  factory.get(user)
//}


// update
// (req, res, next) => {
  user.fieldSet = {name: "korim", email: "korim@gmail.com", age: 20};
  factory.update(user)
//}