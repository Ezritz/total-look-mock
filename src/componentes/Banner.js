import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import logo from '../images/Logo.png'
import cart from '../images/cart.png'
import '../css/Banner.css'

export default function Banner(){
// contraseña y suario: admin@totallook.com-- Adm1n@2020
const [welcome, setWelcome]= useState("Welcome")
const navigate= useNavigate();
const handleLogIn= ()=>{
    navigate('/Login')
}



    return(
        <header className="banner-container">
            <img className="logo" src={logo} alt="totallook"/>
            <div className="container-login">
                <button className="btn-login" onClick={handleLogIn}>Login{welcome}</button>
                <img className="cart" src={cart} alt="shoppingcart"/>
            </div>
        </header>
    )
}