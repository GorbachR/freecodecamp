const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
  
    this.setFullName = (newName) => {
      firstAndLast = firstAndLast.replace(/.+/, newName);
    }
  
    this.getFirstName = () => {
      return firstAndLast.match(/^\w+/)[0];
    }
  
    this.setFirstName = (newFirstName) => {
      firstAndLast = firstAndLast.replace(/^\w+/,newFirstName);
    }
  
    this.getLastName = () => {
      return firstAndLast.match(/\w+$/)[0];
    }
  
    this.setLastName = (newLastName) => {
      firstAndLast = firstAndLast.replace(/\w+$/,newLastName);
      
    }
  
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  