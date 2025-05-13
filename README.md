

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
5. hooks must be imported to use




useState : useState is a hook in functional component which allows us to use and manage the state 



useState syntax :
1. it will accept an initial args - it can be any data type

useState(0)
useState(false)

2. it will return an array which contains current state and updater function

const [count,setCount] = useState(0)
const [isLogin,setIsLogin] = useState(false)
const [employees,setEmployees] =useState([])



