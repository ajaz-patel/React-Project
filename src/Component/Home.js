import React from 'react'
import Mynavbar from './Mynavbar'
import Footer from './Footer'



export default function Home() {
    return (
        <div>
            <Mynavbar />
            I am home page
            <div className='foot'><Footer /></div>
        </div>
    )
}
