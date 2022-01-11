import sale1 from '../images/sale-1.png';
import sale2 from '../images/sale-2.png';
import '../css/Sales.css';

export default function Promociones (){
    return (
        <div className="promociones">
            <div>
                <img src={sale2} alt="sale2" className="sale2"/>
            </div>
            <div>
                <img src={sale1} alt="sale1" className="sale1"/>
            </div>
        </div>
        
    )
}