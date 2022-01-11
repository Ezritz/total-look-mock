import { useNavigate } from "react-router-dom"

export default function Banner(){
// contraseña y suario: admin@totallook.com-- Adm1n@2020
const navigate= useNavigate();
const handleLogIn= ()=>{
    navigate('/Login')
}
    return(
        <header>
            <button onClick={handleLogIn}>Login</button>
        </header>
    )
}