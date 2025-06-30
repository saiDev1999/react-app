





State : 
State is an oject(data) which can be mutable 


Library : all the books in one place
1. Books scattered in different rooms managed by same room people
2. Library : - everyone can able to access the book




State management : managing the data across the app 
1. Local state management  - state in different components managed by each component - useState, useReducer
2. Global state management  - state will shared across the entire application - redux, context




useReducer :
it is a hook provided by react funtional component which is used to create and manage the complex data or state management

syntax :

useReducer accepts 2 args :
1. reducer function
2. initial state 


useReducer returns an array which contains current state and function to change the current state (dispatcher function)


const[currentState, dispatch] = useReducer(()=>{},[])



Todo :  ["I need to woke up at 6am"]




CRUD : 

1. Create - add 
2. Read - Read
3. Update 
4. Delete












