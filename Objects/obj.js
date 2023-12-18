

//object literal 

const cup = {
    color : "white" ,
    size : "20 centimeter" ,
    price : 50  ,
    "Brand" : "StrongCup PVT.LTD."
};

console.log(cup);
console.log(cup.color) 
//also we can access like value using []

console.log(cup["color"])

/*in obj , kes are basically strings ,
we can not access string using dote method, 
we can use ["key_name"] method for access that string key value );
*/
console.log(cup["Brand"])     //StrongCup PVT.LTD.

//Q)take symbol data type , put as key of obj and print(log) that ket/value 

//sol: while working with symbol , put key is object in [] and access value using [] in key with [] method. 

const mySymbol = Symbol("key 1");

const obj = {
    [mySymbol] : "key 1"
};
console.log(obj[mySymbol])   //key 1

console.log(typeof(mySymbol))

console.log(typeof(cup.price))

//freeze object - we can not change any value of properties of objects 

Object.freeze(cup);

cup.price = 900;   // this change will not work , price remain 50 

console.log(cup.price)

/* ---------------------------------------------------------------------- */
cup.greeting = function() {
    console.log(` How much for this cup  ${this.price} `);
}

//object as property in object 
const regularUser = {
    email : "abd@gmail.com" , 
    fullName : {
        userName : {
             firstName : "divyesh",
             lastName : "parmar"
        }
    } 
};
console.log(regularUser.fullName?.userName.lastName);

const obj1 = {
    0:"A",
    1:"B",
    3:"C",
}
const obj2 = {
    4:"D",
    5:"E",
    6:"F"
}



//get keys and values in Arrays 
const obj3 = {...obj1 , ...obj2}
console.log(obj3)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))




