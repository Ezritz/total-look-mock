import { useState } from "react";
import { Link } from "react-router-dom";
import { AddImg } from "../firebase/Auth";
import "../css/Admin.css";
import Banner from "./Banner.js";

export default function Admin() {
  const [category, setCategory] = useState("");

  const handleFile = (e) => {
    const targ = e.target.files[0];
    AddImg(targ, targ.name).then(() => {
      console.log("succesfull");
    });

    AddImg.snapshot.ref.getDownloadURL().then((url_img) => {
      console.log("url", url_img);
    });
    setCategory("");

    console.log(targ);
  };

  return (
    <div>
      <div>
        <Banner />
      </div>
      <main className="box">
        <form>
          <label>Image</label>
          <input
            onChange={handleFile}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
          />
          <label>Description</label>
          <input onChange={category} type="text" />
          <button type="submit" className="send">Send</button>
          <button className="delete" >Delete</button>
        </form>
        <Link to="/Categories">Back to categories list</Link>
      </main>
      <footer 
            className='copyright'
            >Copyright©️ Scrumbled Code
            </footer>  
    </div>
    
            
  );
}
