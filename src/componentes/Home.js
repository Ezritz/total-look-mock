//import { useState, useEffect } from 'react';
import Sales from './Sales';
import Banner from './Banner';
import '../css/Home.css';
import {useNavigate} from 'react-router-dom';
import Categories from '../Categories';



export default function Inicio () {
    
    const navig = useNavigate();
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
                
                
               <a
               
               onClick={navig('/Categories')}>
                   See all products >>
               </a>
                
               
            </div>
            <div>
                <Sales />
                
            </div>
            <footer  
            className='copyright'
            >Copyright©️ Scrumbled Code
            </footer>   
        </div>
        
    )


}