import React from 'react'
import Mynavbar from './Mynavbar'
import Footer from './Footer'


export default function Register() {
    return (
     
       
        <div>
            <div>
            <Mynavbar />
            </div>
            <div className="card container mt-4 p-4" id="main" style={{ 
                 backgroundColor: "#D3DCE6",boxShadow: "10px 10px 8px 6px" }}>
                <center><h1>Register Form</h1></center>
                <form className='container mt-3'>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputNumber" className="form-label">Mobile Number</label>
                        <input type="number" className="form-control" id="exampleInputNumber" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        
                    </div>
                    <div className='d-flex justify-content-center pb-2'><button type="submit" className="btn btn-primary"style={{width:"50%",height:"auto"}}>Submit</button></div>
                </form>
            </div>  
         <div className='foot '><Footer/></div>
        </div>
        
       
      
        
    )
}
