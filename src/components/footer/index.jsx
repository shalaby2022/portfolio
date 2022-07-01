
import { Link } from 'react-router-dom';
import './Footer.css'



const Footer = () => {
    
    return <div className="bg-dark text-white position maxHeight">
        <div className='container'>
            <h4 className="text-danger lineHieght">Find Me on :</h4>
            <div>
                <ul>
                    <li ><Link to="/https://www.facebook.com/shalpy1" target="_blank">imgsadsadasdsa</Link></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Footer