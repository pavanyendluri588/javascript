

//In other words, this.firstName means the firstName property of this object.

person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
x=person.fullName()
console.log(x);



person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    //return firstName + " " + lastName; return error 
    
  }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
x=person.fullName()
console.log(x);
