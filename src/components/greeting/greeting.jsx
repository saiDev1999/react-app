

const Greeting = (props)=>{
    const{name,message,time} = props
    return <h4>Hello {name}, {message}. Now the time is {time}</h4>
}

export default Greeting