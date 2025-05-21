







steps :

1. Take a form (login (username, password), registration(username,password,confirmPassword,mobile number))
2. Take a states for the form input elements
3. pass the state value to input via attribute value
4. onChange attritube for the inputfor  controlling and validating the fields 
5. To collect the value from input use event.target.value


const [username,setUsername] = useState("")



const handleChange =(event)=>{
   console.log(event.target.value)

}

username 
<input value={username} onChange={handleChange} />
