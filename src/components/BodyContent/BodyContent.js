import React from 'react'
import './bodycontent.css'

const BodyContent = () => {
    return (
        <div>
            <div className='container'>
                <div className='row mt4'>
                    <h1>OUR DEPARTMENTS</h1>
                    <p>Asperiores sunt consectetur impedit nulla molestiae delectus repellat
                        laborum dolores doloremque accusantium
                    </p>
                    <div className='col-lg-3 mt4'>
                        <div className='col-lg-3 department' style={{ width: "90px" }}><img src={require("../../Images/s1.png")} className="img5" alt="..." /></div>
                        <h1>CARDIOLOGY</h1>
                        <p>fact that a reader will be distracted by the readable page when looking at its layout.</p>
                    </div>
                    <div className='col-lg-3 mt4'>
                        <div className='col-lg-3 department' style={{ width: "90px" }}><img src={require("../../Images/s2.png")} className="img5" alt="..." style={{ height: "60px" }} /></div>
                        <h1>DIAGNOSIS</h1>
                        <p>fact that a reader will be distracted by the readable page when looking at its layout.</p>

                    </div>
                    <div className='col-lg-3 mt4'>
                        <div className='col-lg-3 department' style={{ width: "90px" }}><img src={require("../../Images/s3.png")} className="img5" alt="..." /></div>
                        <h1>SURGERY</h1>
                        <p>fact that a reader will be distracted by the readable page when looking at its layout.</p>

                    </div>
                    <div className='col-lg-3 mt4'>
                        <div className='col-lg-3 department' style={{ width: "90px" }}><img src={require("../../Images/s4.png")} className="img5" alt="..." /></div>
                        <h1>FIRST AID</h1>
                        <p>fact that a reader will be distracted by the readable page when looking at its layout.</p>
                    </div>
                    <div className='btn-box mt5'><a href="/">View All</a></div>

                    <div className='col-lg-6 mt5'>
                        <img src={require("../../Images/about-img.jpg")} alt='' style={{ borderRadius: "15px", width: "40em" }} />
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='abt'>ABOUT US</h1>
                        <p className='ab'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                            of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                        </p>
                        <div className='btn-box' style={{float:"left"}}><a href="/">Read More</a></div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default BodyContent
