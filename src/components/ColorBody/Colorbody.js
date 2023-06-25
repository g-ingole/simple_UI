import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './colorbody.css'

const Colorbody = () => {
    return (
        <div>
            <div className='container-fluid mt5' style={{ backgroundColor: "#178066" }} >
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 style={{ color: "#fff" }}>OUR DOCTORS</h1>
                        <p style={{ color: "#fff" }}>Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis
                            laudantium<br /> fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
                        </p>
                    </div>
                    <Container>
                        <Row className='abc mt4'>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d1.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Elina Josh</h5>
                                    <h6>Doctor</h6>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d2.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Adam View</h5>
                                    <h6>Doctor</h6>

                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d3.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Mia Mike</h5>
                                    <h6>Doctor</h6>

                                </div>

                            </div>
                            <div className='btn-boxx mb5'><a href="/">View All</a></div>


                        </Row>
                    </Container>

                </div>


            </div>
        </div>
    )
}

export default Colorbody
