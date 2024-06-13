import React from 'react'
import Mynavbar from './Mynavbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function Login() {
    return (

        <div>
            <div className='sticky'>
                <Mynavbar />
            </div>
            <div className="card container mt-5 p-4" id="main" style={{
                backgroundColor: "#D3DCE6", boxShadow: "10px 10px 8px 6px"
            }}>
                <center><h1>Login Form</h1></center>
                <form className='container mt-3'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />

                    </div>
                    <br/>
                    <div className='d-flex justify-content-center pb-2'><button type="submit" className="btn " style={{ width: "50%", height: "auto", backgroundColor: "#000080", color: "white" }}>Login</button></div>
                    <br/>
                    <div><center><Link to="/register">Need to create account click here</Link></center></div>
                </form>
            </div>

            <div className='foot '><Footer /></div>
        </div >
    )
}
