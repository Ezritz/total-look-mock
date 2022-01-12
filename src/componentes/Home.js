//import { useState, useEffect } from 'react';
import Sales from './Sales';
import Banner from './Banner';
import '../css/Home.css';
import Categories from '../Categories';



export default function Inicio () {
    
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <label>Search products </label> 
                <input
                    type="text"
                    className="search"
                    
                />
                <label
                className="logo-search"
                >🔎</label>
            </div>
            
            <div>
                <a>
                    See all promotions >>
                </a>
                
                
                
               
            </div>
            <div>
                <Sales />
                <Categories />
            </div>
            <footer  
            className='copyright'
            >Copyright©️ Scrumbled Code
            </footer>   
        </div>
        
    )


}