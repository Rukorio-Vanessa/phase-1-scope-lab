// Write your solution in this file!
//variable in global scope called customerName using the var keyword.
//assign bob
var customerName = 'bob'

//function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
}    

//function 'setBestCustomer' that when called, declares a variable called 'bestCustomer' in global scope  
//assigns it to be 'not bob'
function setBestCustomer(){
    bestCustomer = 'not bob'
}

// See the consequences of declaring a variable in global scope, by;
// writing a new function called 'overwriteBestCustomer()' 
//it changes the bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}


//declare a constant using the const keyword in global scope called 'leastFavoriteCustomer'
//assign it a value
const leastFavoriteCustomer = 'jade'


//function called 'changeLeastFavoriteCustomer' that attempts to change that constant 
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'gio'
}
changeLeastFavoriteCustomer()//returns error:'Assignment to constant variable'