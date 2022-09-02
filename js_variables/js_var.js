//variable declaring using the var 
var a ;
a=15
console.log("before updation",a)
//variable with var cannot  be declared without initilization
//the varible is declared by using var can be redeclared  or updated 
//It can be accessed without initialization as its default value is “undefined”.
var a =20;
console.log("after updation:",a)

/
//variable declaring using the let 

let b = 10;
console.log(b)
//It cannot be accessed without initialization otherwise it will give ‘referenceError
//variable can be declared without let keyword can be considered as declaring let 
c=30
console.log(c)
//variable with const let  be declared without initilization
//the variable declared by using let cannot be redeclard but the value can be updated
c=50
console.log("after updation of c:",c)


//It cannot be accessed without initialization otherwise it will give ‘referenceError
//variable is declared by using const 
const d =500
//variable with const cannot be redeclared  and cannot be upated
//variable with const cannot  be declared without initilization
//jittu