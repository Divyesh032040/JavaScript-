
// promise in javascript which represent async task is resolve or reject etc 
//1) promise 1 

const promiseOne = new Promise(function( resolve , reject ){
    //Do an async task
    // DB calls, cryptography, network etc 
    setTimeout( function(){
        console.log('Async Task 1');
        resolve();
    } , 1000);
    
})

promiseOne.then(function(){
    console.log('promise resolved Task 1 ')
})

//then function allows you to specify what should happen after the asynchronous operation is complete.
//When resolve() is called, the promise transitions from a pending state to a fulfilled state.
//after resolve() , than () code scheduled to execute and execute 


/*So, the sequence of events is as follows:

Promise is created and enters the pending state.
The setTimeout function initiates an asynchronous operation.
After 1000 milliseconds, the asynchronous operation completes successfully, and resolve is called.
The Promise transitions to the fulfilled state.
The then handler is scheduled to execute.
The then handler executes, logging "Operation completed successfully" to the console */

/*--------------------------------------------------------------------------------*/

//without store into variable 

 new Promise(function( resolve , reject ){
    setTimeout( function(){
        console.log('Async Task 2');
        resolve() ;     //resolve function insure async task resolve so it should be after async task.
    } , 1000)
}).then(function(){
    console.log('promise resolved Task 2  ')
})

/// if we pass any data in resolve function , we can access it in then function because both ae connected 

const promiseThree = new Promise(function( resolve , reject){
    //async code 
    setTimeout( function (){
        resolve({userName : 'Divyesh' , profession : "developer "})
    } , 2000)
})

promiseThree.then(function(user){
    console.log(user)
});

/*---------------------------------------------------------------------- */

// so we understand all process between Promise , resolve() and then() : summery 

/*
1. **Promise Creation:**
   - Create a new Promise using the `Promise` constructor with `resolve` and `reject` parameters.

2. **Asynchronous Operation:**
   - Perform an asynchronous task or operation inside the Promise constructor.

3. **Resolve the Promise:**
   - Call the `resolve` function within the Promise constructor when the asynchronous operation is successful.

4. **Handle the Resolved Promise (`.then`):**
   - Attach a `then` handler to the Promise to execute code when the Promise is resolved.
   - The `then` handler receives the value passed to `resolve` as its argument.

This sequence represents the basic flow of `creating, resolving, and handling` a Promise in JavaScript.
*/

/*--------------------------------------------------------------------------------*/


//4th Promise : error present ->  .then() , .catch()


const PromiseFour1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({userName : 'divyesh' , password : 'dp032040'})
        }else{
            reject(`Error : error occur`)
        }
    },2000)
}).then(function(data){
     console.log(data)
}).catch(function(){
    console.log("error come ")
})

//if error = false ; then data comes and if error is true means present than .catch through error comes. 

/*--------------------------------------------------------------------------------*/

//.then()   , .catch()  , .finally()

//callback hall    -> access property of resolve data

const PromiseFour2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false ;
        if(!error){
            resolve({userName : 'divyesh' , password : 'dp032040'})
        }else{
            reject(`Error : error occur`)
        }
    },2000)
})

// if we just want username from data
//.then() after .then its called chaining 

PromiseFour2.then((user)=>{
    return user.userName;
}).then((userName)=>{
    console.log(userName);
}).catch(function (error){
    console.log("error occurred")
}).finally(function(){
    console.log("the promise is ether resolve or error occurred ")
})

//when error = false ;  output : divyesh
//when error = true ;  output : error occurred

/*--------------------------------------------------------------------------------*/


//promise 5 

const promiseFive = new Promise(function( resolve , reject ){
    let error = false;
    setTimeout(function(){
    if(!error){
        resolve({Language : "Java script" , password : 1234 })
    }else{
        reject("error :Js went wrong ")
    }
    } , 2000)
});

//handel promise using : async await => try : catch    ,,,    alternate of .then .catch .finally

async function ConsumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

ConsumePromiseFive();


/*----------------------------------  fetch()  -----------------------------------------*/

//using tryCatch block 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

//using thenCatch method 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))





















