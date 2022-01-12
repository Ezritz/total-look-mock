import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../firebase/Auth";
import '../css/Login.css'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        console.log('Iniciando sesión ')
        logIn(email, password).then(() =>{
            console.log('Iniciaste sesión')
            navigate('/Admin')  
        }).catch((error) => {
           console.log(error.message)
        });
    }
    const handleReturn = () => {
        navigate('/')
    }

    return(
        <main className="bodyForm">
            <form className="form-container" onSubmit={handleLogIn}>
                    <h2>LOGIN</h2>
                    <label>E-mail</label>
                    <input onChange={(e) => { setEmail(e.target.value); } }
                        id="email" type="email" placeholder="correo@correo.com" />
                    <label>Password</label>
                    <input onChange={(e) => { setPassword(e.target.value); } }
                        id="password" type="password" placeholder="******" />
                    <button 
                        type="submit" className="btn-form">LogIn</button>
            </form>
            <button onClick={handleReturn}
            className="btn-return">Return Home</button>
        </main>
    )
}