





1. useMemo 
2. useCallback
3. Custom hooks - useServer, useLaptop, useNet



Major Problem in react is re-rendering :



useMemo : useMemo is a react funtional hook, which is used to memorize the value returned by the function without re-calculating the returned value

2 args  and return a value


const memoizedValue = useMemo((b,c)=>{
    const a = b + c
    return a
},[dependencyVariable1, dependencyVariable2])




 
2 - even 
3 - odd
4 - even




useCallback :

The React useCallback Hook returns a memoized callback function.


useCallback(()=>{
    
},[])