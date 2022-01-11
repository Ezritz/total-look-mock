// import { useState, useEffect } from 'react';
import Sales from './Sales';
import Banner from './Banner'
import myImage from '../images/search-1.png';

export default function Inicio () {
   // const [activeMenu, setActiveMenu] = useState('');

    return (
    
        <div>
        <Banner/>        
            <a>
                See all promotions >>
            </a>
            <div>
                <label>Search products</label>
                <input
                    type="text"
                    className="search"
                    
                />
                <img src={myImage} width="20px"/>
                
               
            </div>
            <div>
                <Sales />
            </div>
        </div>
    )


}