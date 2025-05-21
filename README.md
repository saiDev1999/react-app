



Forms :

 2 ways to handle forms in react

 1. uncontrolled way - (uncontrolled components)
    Here react doesn't control the data(state) changes
    validations will be possible only while submitting
    Dom will control the inputs
    ex : useRef 


 2. controlled way - (controlled components)
    React will control the state changes
    Field validations are possible
    React will control the input



scenario 1 :
100 inputs - name,age,...

submit


scenario 2 :
100 inputs 





useRef :
Its useful for accessing DOM elements or keeping mutable variables btw renders without causing re-render when they changes



useRef will accept an initial argument 

useRef(null)


useRef.current