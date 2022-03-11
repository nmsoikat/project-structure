class User{
  constructor(){
    this.collection = "userInfo";
  }

  set fieldSet(data){
    this.document = {
      name: data.name || null,
      email: data.email || null,
      password: data.password || null,
      age: data.age || null
    }
  }

  get fieldSet(){
    return this.document;
  }

  //optional way
  set docId(id){
    this._id = id;
  }
  get docId(){
    return this._id;
  }
}

module.exports = {User};