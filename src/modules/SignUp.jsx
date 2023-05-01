import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {
    // const navigate = useNavigate()
    // const [currentPage, setcurrentPage] = useState(0);
    const test = () => {
        console.log("hello")
        props.setCurrentPage(1);
    }
    return (
        <>

            <div className='Log'>
                <div className="log1">
                    <h3>Hey!</h3>
                    <h2>Welcome.</h2>
                    <br /><br />
                    <img className='leftImg' src='Images\undraw_transfer_money_rywa 2.png' />
                </div>
                <img className='lin1' src='\Images\Line 9.png' />
                <div className='log2'>
                    <br />
                    <img src='\Images\Group 944.png' />
                    <br /><br />
                    <h3>Sign Up to Vep.</h3>
                    <p>Enter your phone number to register with your<br /> account.</p>
                    <form onSubmit={test} class="mb-3">
                        <br />
                        <div className='formDiv'>
                            <div className='div2'>
                                <img className='gap' src='\Images\Group.png'></img>
                                <span className='gap'>+234</span>
                                <img className='gap' src='\Images\Line 1.png'></img>
                                <input className='div3 div5' type='tel' placeholder='Enter phone number'></input>
                            </div>
                        </div>
                        <br />
                        <br />
                        <img className='icn icn6 icn5' src='\Images\Vector (10).png'></img>
                        <input type="submit" value="NEXT" className='btn1' />


                    </form>
                    <br />
                    <p className='sigUp'>Already have an account? <a href='/'>LOGIN</a> </p>

                </div>
            </div >
        </>

    )
}
