import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const test = () => {
        console.log("hello")
        navigate('/dashboard');
    }
    return (
        <>

            <div className='Log'>
                <div className="log1">
                    <h3>Hey!</h3>
                    <h2>Welcome back.</h2>
                    <br /><br />
                    <img className='leftImg' src='\Images\undraw_pay_online_b-1-hk (1) 1.png' />
                </div>
                <img className='lin1' src='\Images\Line 9.png' />
                <div className='log2'>
                    <br />
                    <img src='\Images\Group 944.png' />
                    <br /><br />
                    <h3>Login to your acconut.</h3>
                    <p>Enter your registered email ID and password.</p>
                    <form onSubmit={test} class="mb-3">
                        <div className='formDiv'>
                            <div className='div2'>
                                <img src='\Images\Vector (7).png'></img>
                                <input className='div3' type='email' placeholder='Enter email ID'></input>
                            </div>
                        </div>
                        <br />
                        <div className='formDiv'>
                            <div className='div2'>
                                <img src='\Images\Vector (8).png'></img>
                                <input className='div3' type='password' placeholder='Set Password'></input>
                                <img className='div4' src='\Images\Vector (9).png'></img>
                            </div>
                        </div>
                        <br />
                        <input type="submit" value="Login" className='btn1' />
                    </form>
                    <p>Forgot Password? <a href='/page2'>RESET PASSWORD</a> </p>
                    <br></br>
                    <p className='sigUp'>Don't have an account <a href='/signUp'>SIGN UP</a> </p>
                </div>
            </div >
        </>

    )
}
