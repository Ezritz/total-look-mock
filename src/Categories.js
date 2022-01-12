import React, {useState, useEffect} from "react";
import clothes from './clothes.jpg';
import shoes from './shoes.jpg';
import handBags from './bags.jpg';
import kids from './kids.jpg';
import accesories from './accesories.jpg';
import others from './others.jpg';
import { SeeImg } from './firebase/Auth';
import { refer } from './firebase/Auth';
import { db } from './firebase/Config';
import TheCategories from './TheCategories';


export default function Categories () {

    const [collection, setCollection] = useState('');
    const getCategories =  () => {  
        db.collection('totallook').onSnapshot((snapshot) => {
            let docs = [];
            snapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id })
                     //   console.log(docs)
                     console.log(docs);
            });
           
            setCollection(docs)
        })
      
    };

    useEffect(() => {
        
        getCategories();
        console.log('aqui',collection);
    },[]);

    {/*
        const imgs = SeeImg.map((element) => {
            return <TheCategories 
            url={element.url}
            name={element.name}
            
            />
        })
    */}


    return (
        <div>
            <section > 

                    
<a> Return Home </a>

<div>
    <label> Search products </label>
        <input type="text" className="search"/>
</div>



<div className="Categories">

    <div className= "category">
        
        
    </div>



</div>
</section>
            { /*
                collection.map((element) => {
                
                    
                })
                
                
            */}
         

        </div>

    );
}