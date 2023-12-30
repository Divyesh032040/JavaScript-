

//map() function 

const array = [10,20,30,40,45,50];

const ans = array.map(function Binary(x) {
    return x.toString(2)
})

const ans2 = array.map((index) => index.toString(2) )

console.log(ans);
console.log(ans2);


//filter() function 

let arr = [10,20,33,40,50];

const Ans = arr.filter((x) => x % 2 != 0);

console.log(Ans)    // [33]


//reduce() function  - 2 example 

//maximum of array

let Arr = [10,20,33,40,50];

const output = Arr.reduce( function( acc , curr ) {
    return acc = acc + curr ;
} , 0 );

console.log(output);

//minimum of array

const MinVal = arr.reduce(function( acc,curr ){
    if (curr < acc) {
       acc = curr;
    }
    return acc;
}, Number.MAX_SAFE_INTEGER )

console.log(MinVal);


// map() function exercise - Question 

const persons = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 22, city: 'Los Angeles' },
  ];
  
  const UserData = persons.map((user) => user.name + ` is from ` + user.city);
  
  console.log(UserData);   

/*[
    'Alice is from New York',
    'Bob is from San Francisco',
    'Charlie is from Los Angeles'
  ] */

 // reduce good question 

 //{ '22': 1, '25': 1, '30': 1, '39': 2 }


const Persons2 = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Prince', age: 22, city: 'New York' },
    { name: 'Rock', age: 39, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 39, city: 'Los Angeles' },
  ];
  
  const UserAgeData = persons2.reduce((acc , curr) => {
      if(acc[curr.age]){
          acc[curr.age] = ++acc[curr.age]
      } else {
      acc[curr.age] = 1 ;
      }
      return acc ;
  } , {} )
  
  console.log(UserAgeData);


  // filter question - console log name of user if its age is less than 30 user

  const persons3 = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Prince', age: 22, city: 'New York' },
    { name: 'Rock', age: 39, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 39, city: 'Los Angeles' },
  ];
  
  const UserNameData = persons3.filter((user) => {
      if(user.age < 30) {
          console.log(user.name)           // Alice                                              
      }                                    //Price
  })                                       


                                



