import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BasicDetails(props) {
    const navigate = useNavigate()
    const [count, setCount] = useState(2);
    const test = () => {
        console.log("hello");
        if (count == 1)
            props.setCurrentPage(5);
        else
            props.setCurrentPage(3);
    }
    const log = () => {
        props.setCurrentPage(1);
    }
    const finalPage = () => {
        setCount(1);
    }
    const nextPage = () => {
        setCount(2);
    }

    const [isDisable, setisDisable] = useState(true)

    return (

        <div className='bdet1'>
            <img className='lin1 midline' src='\Images\Line 9.png' />
            <img onClick={log} className='img1' src='\Images\Vector (11).png' />
            <div className='leftdet'>
                <img src='\Images\Group 940.png' />
                <br /><br />
                <h3>Basic Details</h3>
                <br />
                <p>Account will be used by/for:</p>
                {/* <br /> */}
                <div className='choose'>
                    <div className='check1'>
                        <input onClick={finalPage} type="radio" value="Male" name="gender" />
                        <span className='leftgap'>INDIVIDUAL</span>
                    </div>
                    <div className='check1 check2'>
                        <input onClick={nextPage} type="radio" id="Black" name="gender" defaultChecked={true} />
                        <span className='leftgap'>BUISNESS</span>
                    </div>
                </div>
                <br /><br /><br />
                <p>Set your wallet's primary currency</p>
                <div className='formDiv'>
                    <div className='div2'>
                        <select className='div3 col1' name="dog-names" id="dog-names">
                            <option value="rigatoni">Select currency</option>
                            <option value="dave">Rupees</option>
                            <option value="pumpernickel">Dollar</option>
                            <option value="reeses">Euro</option>
                            <option value="reeses">Dhiram</option>
                            <option value="reeses">Yen</option>
                        </select>
                    </div>
                </div>
                <br /><br />
                <p>Provide all your required details for your account.</p>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Enter your First Name'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Enter your Last Name'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Enter your Date of birth '></input>
                        <input className='datediv' type='date' ></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <select className='div3 col1' name="dog-names" id="dog-names">
                            <option value="rigatoni">Enter your Nationality</option>
                            <option value="dave">India</option>
                            <option value="pumpernickel">America</option>
                            <option value="reeses">England</option>
                            <option value="reeses">Dubai</option>
                            <option value="reeses">Japan</option>
                        </select>
                    </div>
                </div>
                <br /><br /><br />
                <div className='detFooter'>
                    <div className='foot1'>
                        <input type='checkbox' onClick={
                            () => setisDisable(!isDisable)
                        } ></input>
                    </div>
                    <div className='foot1 foot2'>
                        <p>I have read and I agree to the <a href='/basicdetails'>Terms and Conditions</a>, and the <a href='/basicdetails'>Privacy Policy.</a></p>
                    </div>
                    <div onClick={test} className='foot1 foot3'>
                        <img className='icn credIcn9 footimg icn5' src='\Images\Vector (10).png'></img>
                        <button disabled={isDisable} placeholder="NEXT" className='btn1' >NEXT</button>
                        <br></br>
                    </div>

                </div>
            </div>




            <div className='rightdet'>
                <p>Provide your business address:</p>
                {/* <br /> */}
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Address line 1'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv '>
                    <div className='div2 '>
                        <input className='div3' placeholder='Address line 2'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Street'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='City/Town'></input>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <select className='div3 col1' name="dog-names" id="dog-names">
                            <option value="rigatoni">State</option>
                            <option value="dave">Chattisgarh</option>
                            <option value="pumpernickel">Odisha</option>
                            <option value="reeses">Bihar</option>
                            <option value="reeses">Telangana</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <select className='div3 col1' name="dog-names" id="dog-names">
                            <option value="rigatoni">Country</option>
                            <option value="dave">India</option>
                            <option value="pumpernickel">England</option>
                            <option value="reeses">Japan</option>
                            <option value="reeses">Canada</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className='formDiv'>
                    <div className='div2'>
                        <input className='div3' placeholder='Pin Code'></input>
                    </div>
                </div>
                <br /><br /><br />


            </div>

        </div >


    )
}
