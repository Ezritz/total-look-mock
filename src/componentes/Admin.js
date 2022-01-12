import {Link} from 'react-router-dom';
import {AddImg} from '../firebase/Auth';

export default function Admin () {
    

    const handleFile= (e) => {
        const targ = e.target.files[0];
        AddImg(targ,targ.name).then(() =>{ console.log('succesfull')})

            AddImg.snapshot.ref.getDownloadURL().then((url_img)=>{
                console.log('url', url_img)
            })
            
        
        console.log(targ);
    }
    

    return (
        
        <main>
            <form>
                <label>Image</label>
                <input onChange={handleFile}
                type="file"accept="image/png, image/jpeg, image/jpg"/>
                <label>Description</label>
                <input type="text"/>
                <button type="submit">Send</button>
                <button>Delete</button>
            </form>
            <Link to= "/Categories">Back to categories list</Link>
        </main>
        
    )

}