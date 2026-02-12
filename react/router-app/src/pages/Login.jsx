import {useState} from 'react'
import  {useNavigate} from "react-router-dom"

export default function Login(){
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginHandle = () =>{
        const userData = JSON.parse(localStorage.getItem('users'))


        if(userData.emailId === emailId && userData.Password === Password) {
            alert("Login success")
            navigate('/home')
        }
    }
    return(
        <div>
           <form onSubmit={loginHandle}>
            <div>
                <label>Email
                <input type="email"onChange={(e) => setEmailId(e.target.value)} />
                </label>

                <label>
                    Password
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <buttton type="submit">Submit</buttton>
                
            </div>
           </form>
        </div>
    )
}