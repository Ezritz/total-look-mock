import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AddImg, description} from '../firebase/Auth';
import Categories from '../Categories';

export default function Admin () {
    const [category, setCategory] = useState('');

    

    const handleFile= (e) => {
        const targ = e.target.files[0];
        AddImg(targ,targ.name).then(() =>{ console.log('succesfull')})

            AddImg.snapshot.ref.getDownloadURL().then((url_img)=>{
                console.log('url', url_img)
            })
            
        
        console.log(targ);
    }

    const handleSubmit=(e) => {
        e.prevent.default();
        description(category, 'url')
        
        .then(()=> {
            
            console.log('okey')
        })
        .catch((error)=> {
            console.log(error);
        })

        console.log('holis')
    }

    return (
        
        <main>
            <form>
                <label>Image</label>
                <input onChange={handleFile}
                type="file"accept="image/png, image/jpeg, image/jpg"/>
                <label>Description</label>
                <input 
                onChange={(e)=> setCategory(e.target.value)}
                type="text"/>
                <button 
                onClick={handleSubmit} 
                type="submit">Send</button>
                <button>Delete</button>
            </form>
            <Link to= "/Categories">Back to categories list</Link>
            <Categories />
        </main>
        
    )

}