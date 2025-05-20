

16.8 Version 2018


Hooks : hooks let us use of state and other react features without writing class

hooks are simple reusable functions 
almost every problem can solved using hooks


React Hooks :
1. useState 
2. useEffect
3. useReducer
4. useRef
5. useContext
6. useCallback
7. useMemo
8. custom hooks - we will design it using predefined hooks (mentioned above) - useSai, useLocation



Hook Rules
1. hooks must be always used in functional components
2. hooks must be always call at the top of the component
3. hooks cannot be conditional
4. hooks must be camelCase
5. hooks must be imported to use react


state : its a object which contains some data and it can be mutable

useState : useState is a hook in functional component which allows us to use and manage the state 



useState syntax :
1. it will accept an initial args - it can be any data type

useState(0)
useState(false)

2. it will return an array which contains current state and updater function

const [count,setCount] = useState(0)
const [isLogin,setIsLogin] = useState(false)
const [employees,setEmployees] =useState([])

API(waiter) : Application programming interface : it connects server(cheff) and client side (customer)

1. get request - server - client
2. post request - client - server
3. put request - update - client - server
4. delete request - client - server 

useEffect : its a hook in react funtional components which causes to perform side effects such as api calls, 
and async actions


syntax : it accepts a function and dependency array

useEffect(()=>{
    // api calls - communication between server and client
},[])


case 1 : if dependency array is empty - useEffect will calls only one time

useEffect(()=>{
    // api calls - communication between server and client
},[])


case 2 : if dependency array is filled with variables - useEffect will calls everytime when variable changes
useEffect(()=>{
    // api calls - communication between server and client
},[variable1,variable2])

case 3 : if no dependency array - it always calls when something changes in the component, it will cause re-render of the component. infinite load ----- avoid this
useEffect(()=>{
    // api calls - communication between server and client
})

case 4 : when function inside the useEffect returns the other function - it can be used for cleanup and prevents memory leaks

useEffect(()=>{
    return ()=>{
        //clean ups to prevent memory leaks
    }
},[])






Recipes : Recipe api consists of few recipes - instructions and ingredients required for a dishes



axios - third party package 
fetch - which will be provided by js