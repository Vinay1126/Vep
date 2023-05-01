import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function NewCred(props) {
    // const navigate = useNavigate()
    // const [currentPage, setcurrentPage] = useState(0);
    const test = () => {
        console.log("hello")
        // navigate('/basicdetails');
        props.setCurrentPage(2);
    }
    return (
        <>

            <div className='Log'>
                <div className="cred1">
                    <h3>Let's</h3>
                    <h2>Secure your login process</h2>
                    <br /><br />
                    <img className='credImg' src='\Images\undraw_secure_login_pdn4 1.png' />
                </div>
                <img className='lin1' src='\Images\Line 9.png' />
                <div className='log2'>
                    <br />
                    <img src='\Images\Group 944.png' />
                    <br /><br />
                    <h3>Create new Login credentials.</h3>
                    <p>Enter your email ID to register your account and set a <br /> password.</p>
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
                        <div className='formDiv'>
                            <div className='div2'>
                                <img src='\Images\Vector (8).png'></img>
                                <input className='div3' type='password' placeholder='Confirm Password'></input>
                                {/* <textarea className='div3' name="txt" placeholder='Confirm Password' rows="1"></textarea> */}
                                <img className='div4' src='\Images\Vector (9).png'></img>
                            </div>
                        </div>
                        <br />
                        <img className='icn credIcn9 icn5' src='\Images\Vector (10).png'></img>
                        <input type="submit" value="NEXT" className='btn1' />


                    </form>
                </div>
            </div >
        </>

    )
}
