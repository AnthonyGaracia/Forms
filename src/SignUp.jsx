import { useState } from "react"

const SignUp = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState(null);

    function handleSubmit(event){
        event.preventDefault()

        setUserName("")
       
        }
   
    return(
        <div>
            <h3>Sign Up!</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input
                    value={username}
                    onChange={(event) => {
                        setUserName(event.target.value)
                        console.log(username)
                    }} 
                    />
                </label>
                <label>
                    Password:
                     <input
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                        console.log(password)
                    }}
                    />
                </label>
                <button type="submit" disabled={username.length < 6 ? true : false}> Submit </button>
            </form>
        </div>
    )
}
export default SignUp