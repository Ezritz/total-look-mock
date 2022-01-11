import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../firebase/Auth";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        console.log('Iniciando sesión ')
        logIn(email, password).then(()=>{
            navigate('/Admin')
        })
    }

    return(
        <form className="form-container" onSubmit={handleLogIn}>

                    <input onChange={(e) => { setEmail(e.target.value); } }
                        id="email" type="email" placeholder="Correo electronico" />
                    <br />
                    <input onChange={(e) => { setPassword(e.target.value); } }
                        id="password" type="password" placeholder="Contraseña" />
                    <button 
                        type="submit" className="btn-form">ENTRAR</button>
                </form>
    )
}