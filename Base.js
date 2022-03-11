class Base{  
  set(obj){
    console.log("Collection:",obj.collection,"\nSave to db",obj.fieldSet);
  }

  get(obj){
    console.log("get data according to ",obj.collection, "collection");
  }

  update(obj){
    console.log("Collection:",obj.collection, "\n update", obj.fieldSet);
  }
}

module.exports = {Base};