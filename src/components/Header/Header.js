import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './header.css'
function NavScrollExample() {
    return (

        <>

            <Navbar expand="lg" className="bg-img">
                <Container>
                    <Navbar.Brand href="#" className='b f2' style={{ color: "#fff" }}>ORTHOC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: "#fff" }}>HOME</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}>ABOUT</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}>DEPARTMENTS</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}>DOCTORS</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}>CONTACT US</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>

                            <NavDropdown.Divider />

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

            <Carousel className='bgimg'>
                <Carousel.Item className='cartitem'>
                    <h3 className='b'>WE PROVIDE BEST <br />HEALTHCARE</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                        Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
                <Carousel.Item className='cartitem'>
                    <h3>WE PROVIDE BEST <br />HEALTHCARE</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                        Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
                <Carousel.Item className='cartitem'>
                    <h3>WE PROVIDE BEST <br />HEALTHCARE</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                        Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
            </Carousel>

        </>


    );
}

export default NavScrollExample;




