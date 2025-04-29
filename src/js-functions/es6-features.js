



// var a=190 - it deosn't have blocklevel scope


// let and const - block level scope


// juice maker - 200


// 3*200 =600
// 4*200 =800

// const addSum=()=>{
//     const juice_maker_price=200
//     let qty =10
//   qty =20
//   console.log(juice_maker_price*qty)
// }


// function addSum(){
//     return
// }

// addSum()




// template literals 


// const greeting = "good morning"

// const nameOfPerson = "fathima"


// version 1
// const final = greeting + " " + nameOfPerson

// version 2 
// const final = `${greeting} ${nameOfPerson}`
// console.log(final)



// destructuring : Extracting the values from array or object

// const fruits = ["mango","kiwi","apple","papaya"]

// const mango = fruits[0]
// const kiwi= fruits[1]
// const apple =fruits[2]

// const [a,b,c,...d] = fruits

// console.log(c)



// const employeeData={
//     name:"fathima",
//     gender:"female",
//     salary : "100k"
// }

// const {...rest} = employeeData

// console.log(`${name} is a ${gender} and expecting salary of ${salary}`)

// console.log(rest)




// default parameters 


// const greet =(nameOfPerson="fathima")=>{
//     return `Good morning ${nameOfPerson}`
// }

// console.log(greet("sai"))


// js - single threaded 




// promise and async await 

// Its a way to handle asynchornous operations in js - such api calls, timers, reading files


// line 1 
// line 2 
// line 3 
// .
// line 19 - long running tasks - api call - bridging between client and server

// promise 

// its a  object that represents the result of async operation
// 1. pending 
// 2. resolved
// 3. rejected



// promise - producing code and consuming code



// producing code 

// const fetchData = () =>{
//     return new Promise((resolve,reject)=>{

//         const status = true
//         if(status){

//      setTimeout(()=>{
//         resolve({
//             nameOfPerson:"fathima"
//         })
//      },2000)

//         }else{
//             reject("something went")
//         }

//     })
// }

// consuming code 
// fetchData().then(result=>console.log(result))


// const consumeData=async()=>{
//     const result = await fetchData()
//     console.log(result)

// }

// consumeData()





