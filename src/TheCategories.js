import Categories from "./Categories"
import clothes from './clothes.jpg';
import shoes from './shoes.jpg';
import handBags from './bags.jpg';
import kids from './kids.jpg';
import accesories from './accesories.jpg';
import others from './others.jpg';

export default function TheCategories(){
    return(
        <div>
            <Categories image = {clothes}/>;
            <Categories image = {shoes}/>;
            <Categories image = {handBags}/>;
            <Categories image = {kids}/>;
            <Categories image = {accesories}/>;
            <Categories image = {others}/>;
        </div>
        
        
    );
}