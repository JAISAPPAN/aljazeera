import { Navbar,Nav,Figure, NavbarBrand,Button } from "react-bootstrap"
import Indexpage_compo from './indexpage_compo'
import Link from 'next/link'


export default function Navbar_compo() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    <Figure>
                        <Figure.Image
                            width={350}
                            height={200}
                           
                            src="./logo.jpg"
                        />
                       
                    </Figure>
                
                </Navbar.Brand>
               
                <Nav className="mr-auto">
                    <Link href="/" passHref ><Button size="lg">Home</Button></Link>
                    <Link href="/about" passHref ><Button size="lg">About Us</Button></Link>
                    <Link href="/Service" passHref ><Button size="lg">Services</Button></Link>
                    <Link href="/Contact" passHref ><Button size="lg">Contact Us</Button></Link>
                    
                </Nav>
                
                <Indexpage_compo/>
            </Navbar>
        </div>
    )
}


