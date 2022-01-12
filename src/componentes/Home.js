// import { useState, useEffect } from 'react';
import Sales from './Sales';
import Banner from './Banner'
import myImage from '../images/search-1.png';
import '../css/Home.css'

export default function Inicio () {
   // const [activeMenu, setActiveMenu] = useState('');

    return (
        <div className='bodyAll'>
            <Banner/>        
            <main>
                <p>See all promotions ..</p>
            <section>
                <label>Search products</label>
                <input type="text"
                    className="search"
                />
                <img src={myImage} alt="sale" width="20px"/>
            </section>
            <section>
                <Sales />
            </section>
          </main>
        </div>
    )


}