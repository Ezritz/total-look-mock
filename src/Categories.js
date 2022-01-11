import React, {useState} from "react";
import './categories.css';
import clothes from './clothes.jpg';
import shoes from './shoes.jpg';
import handBags from './bags.jpg';
import kids from './kids.jpg';
import accesories from './accesories.jpg';
import others from './others.jpg';
import TheCategories from './TheCategories.js'

export default function Categories (image) {
const [image, setImage]= useState('')
    return (
        <div>
         <a> Return Home </a>

            <div>
                <Link> Search products </Link>
                    <input type="text" className="search"/>
            </div>

          

            <div className="Categories">

                <div className= "category">
                    <img src= {setImage}  alt="clothes" className = 'clothes'/>
                        <p className = "categoriesName" >Clothes</p>
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