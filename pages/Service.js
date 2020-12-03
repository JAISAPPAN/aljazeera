import {Row,Button} from 'react-bootstrap'
import Navbar_compo from '../components/navbar_compo'
import Footer from './Footer'
import {JumboIndex} from '../components/Jumbo'
import style from '../styles/Home.module.css'
import BrochureOne,{BrochureTwo} from '../components/brochure'

export default function Service() {
    return (
        <div>
        <Navbar_compo/>
        <JumboIndex/>          
           
            <Row><Button variant="primary" size="lg" block>OUR PRODUCTS & SERVICES</Button></Row>
            <BrochureOne />
            
            
                 
                   
            
            
        <Footer/>
        </div>
    )
}

// <div className="headerbottomnojumbo">