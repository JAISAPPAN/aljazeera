
import Navbar_compo from '../components/navbar_compo'
import { Container,Row,Col,Carousel} from 'react-bootstrap'
import {JumboIndex} from '../components/Jumbo';
import Footer from './Footer'
import Carousel_compo from '../components/carousel_compo'




export default function index() {
  return (
    <div>
      <Navbar_compo />
      <JumboIndex/>
        
      
        <Row>
          <Col id="indexcol" sm={5}>
              <p><strong>AL JAZEERA Pipe Lines Cinstruction Cont. LLC</strong> is an 
              established venture (ISO 9001:2015 Certified) in the field of reinforced composite materials in the Middle East Region. The company’s founders believe in the policy of using advanced technical expertise and high quality raw materials to provide our customers with superior quality pipes and other GRP/GRV/GRE products. With the use of advanced machinery in our growing production facility along with a trained workforce we seek to satisfy the growing demand for GRP products in the region.

Pipe systems serve similar function as the veins in the human body. Pipes are utilized in 
various fields for distribution, transmission or as an industry’s engineering component. Our 
products like GRP/GRV/GRE Pipes and fittings will cater to various streams of infrastructure – 
construction, petrochemical plants, sewerage lines, drainage lines, desalination plants, potable water supply, cooling water lines, district cooling 
systems and many more.</p>

              
          </Col>
          <Col sm={6}>
          <Carousel_compo/>
            </Col>
            </Row>
          
      <Footer/>
    </div>
  )
  
}

