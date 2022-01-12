import React, {useState} from "react";
import clothes from './clothes.jpg';
import shoes from './shoes.jpg';
import handBags from './bags.jpg';
import kids from './kids.jpg';
import accesories from './accesories.jpg';
import others from './others.jpg';
import { SeeImg } from './firebase/Auth';

import TheCategories from './TheCategories';


export default function Categories () {
    

    const imgs = SeeImg.map((element) => {
        return <TheCategories 
        url={element.url}
        name={element.name}
        
        />
    })
    
    

    return (
        <div>
         <a> Return Home </a>

            <div>
                <label> Search products </label>
                    <input type="text" className="search"/>
            </div>

          

            <div className="Categories">

                <div className= "category">
                    
                </div>

                              {/*  <div className= "category">
                    <img src= {shoes}  alt="shoes" className = 'shoes'/>
                        <p className ="categoriesName" >Shoes</p>
                </div>

                <div className= "category">
                    <img src= {handBags}  alt="handBags" className = 'handBags'/>
                        <p className = "categoriesName" >Hand Bags</p>
                </div>

                <div className= "category">
                    <img src= {kids}  alt="kids" className = 'kids'/>
                        <p className = "categoriesName" >Kids</p>
                </div>

                <div className= "category">
                    <img src= {accesories}  alt="accesories" className = 'accesories'/>
                        <p classname="categoriesAccesories">Accesories</p>
                </div>

                <div className= "category">
                    <img src= {others}  alt="others" className = 'others'/>
                        <p classname="categoriesOthers">Others</p>
                </div> */}


            </div>

        </div>

    );
}