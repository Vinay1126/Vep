import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Successful() {
    const navigate = useNavigate()
    const test = () => {
        console.log("hello")
        navigate('/page1');
    }
    const val = () => {
        console.log("hello")

    }
    return (


        <div className='lBody'>

            <div className="log1">
                <img className='limg1' src='\Images\Group 940.png' />

            </div>
            <div className='Scont'>
                <h2>Account created Successfully!!!</h2>
                <br />
                <p>You can login to your account through the credentials created.</p>
                <br />
                <p><a href='/'>LOGIN NOW</a></p>
                <img className='simg' src='\Images\undraw_completing_re_i7ap 1.png' />
                <br /><br />
                <div className='sfoot'>
                    <p><img className='inlimg' src='\Images\Vector (12).png' />Account verification is pending, you can verify your account through the mail sent to your email.</p>
                </div>

            </div>

        </div >

    )
}
