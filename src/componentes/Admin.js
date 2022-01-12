import { Link } from "react-router-dom";

export default function Admin (){
    return(
        <main>
    
                <form>
                    <label>Image</label>
                    <input type="file"accept="image/png, image/jpeg, image/jpg"/>
                    <label>Description</label>
                    <input type="text"/>
                    <button type="submit">Send</button>
                    <button>Delete</button>
                </form>

        <Link to= "/Categories">Back to categories list</Link>
        </main>
    )
}