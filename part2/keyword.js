const object = {
    name: 'John Cohnor',
    printName() {
      console.log(this.name);
    }
  }
  
  object.printName(); // what we will see here
  
  const printName = object.printName;
  
  printName(); // what we will se in console here 

  /*
  in the first will be name of object "John Cohnor"
  in the second will be undefined, because рere, you're creating a new reference to the printName method.
  However, when you do this, you're not capturing the context (this) of the object. As a result, 
  printName loses its association with the object.
  */