class Base{  
  set(obj){
    console.log("Collection:",obj.collection,"\nSave to db",obj.fieldSet);
  }

  get(obj){
    console.log("get data according to ",obj.collection, "collection");
  }

  update(obj, id){
    console.log("Collection:",obj.collection,"ID: ",id, "\n update", obj.fieldSet);
  }
}

module.exports = {Base};