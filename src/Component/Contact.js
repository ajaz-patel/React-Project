import React from 'react'
import Mynavbar from './Mynavbar'
import Footer from './Footer'


export default function Contact() {
    return (
        <div>
            <div className='sticky'>
                <Mynavbar />
            </div>
            <div className="card container mt-5 p-4" id="main" style={{
                backgroundColor: "lightyellow", boxShadow: "10px 10px 8px 6px"
            }}>
                <center><h1>Contact Us</h1></center>
                <form className='container mt-3 mb-3' ><br></br>
                    <div className="d-flex align-items-center">
                        <img src={process.env.PUBLIC_URL + '/assests/location.png'} className='d-inline-block me-2' alt="email" style={{ width: "30px", height: "30px" }} />
                        <p style={{ fontSize: "15px" }} className='d-inline-block'>306, Stridely House, Sindhu Bhavan Marg,<br></br>nr. Gtpl House, Bodakdev, Ahmedabad, Gujarat 380054</p>
                    </div>
                    <hr />
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assests/email.png'} className='d-inline-block me-2' alt="email" style={{ width: "30px", height: "30px" }} />
                        <p style={{ fontSize: "20px" }} className='d-inline-block'> ajaz@gmail.com</p>
                    </div>
                    <hr />
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assests/phone.png'} className='d-inline-block me-2' alt="email" style={{ width: "30px", height: "30px" }} />
                        <p style={{ fontSize: "20px" }} className='d-inline-block'> 9988774455</p>
                    </div>
                    <hr/>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assests/web.png'} className='d-inline-block me-2' alt="email" style={{ width: "30px", height: "30px" }} />
                        <p style={{ fontSize: "20px" }} className='d-inline-block'><a href='https://www.stridelysolutions.com/'> www.stridelysolutions.com
                        </a></p>
                    </div>
                    
                </form>
            </div>


            <div className='foot '><Footer /></div>
        </div>
    )
}
