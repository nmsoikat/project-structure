const {Base} = require('./Base')
const base = new Base

const set = function(obj){
  // console.log("form factory", obj.fields);
  base.set(obj)
}

const get = function(obj){
  base.get(obj)
}

const update = function(obj){
  base.update(obj)
}

module.exports = {set, get, update}