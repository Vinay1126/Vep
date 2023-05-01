import React from 'react'
import { AccBarDetails } from './AccBarDetails'
import { useNavigate } from 'react-router-dom'

export default function AccountBar() {
    const navigate = useNavigate();
    return (
        <div className='accBar'>
            <div className='topBarDet'>
                <img src='\Images\Mask Group.png' /><br /><br />
                <h5>Abhijeet Mohapatra</h5>
                <h4 className='topShift'>@abhijeeeeeeet</h4>
            </div>
            <img className='topShift' src='\Images\Line 10.png' />
            <div className='divFill' />
            <div className='rightBar'>{
                AccBarDetails.map((val, key) => {
                    return (
                        <div className='dataBar'
                            key={key}
                            onClick={() => {
                                const path = val.link;
                                navigate('/' + path);
                            }}>
                            <div>
                                <img className='nestBar' src={val.imgUrl} />
                                <p style={{ color: "black" }} className='marginShift'>{val.msg}</p>
                                <br />
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <br />

            <img src='\Images\Line 10.png' />
            <div className='botBarDet'>
                <img className='nestBar' src='\Images\Vector (24).png' />
                <p style={{ color: "black" }} className='marginShift'>Legals</p>
            </div>

            <div className='botBarDet'>
                <img className='nestBar' src='\Images\Vector (25).png' />
                <p style={{ color: "black" }} className='marginShift'>About Vep</p>
            </div>
            <div className='rightLine' />
            <div className='rightSide'>
                <div className='tab1'>
                    <div className='intab'>
                        <p>Log in credentials</p>
                        <br />
                        <div className='block1'>
                            <p>Phone Number</p>
                            <p style={{ color: "black" }}>+234 1234567890</p>
                        </div>
                        <div className='block1'>
                            <p>Email ID</p>
                            <p style={{ color: "black" }}>abhijeetmohapatra@gmail.com</p>
                        </div>
                        <p><a href='/changePass'>Change Password</a></p>
                    </div>

                </div>
                <div className='tab2'>
                    <div className='intab'>
                        <p>Basic Details</p>

                        <div className='block2'>
                            <p style={{ color: "black" }}>Abhijeet Mohapatra</p>
                        </div>
                        <div className='block2'>
                            <p>Date of birth:<span style={{ color: "black" }}>11/11/2023</span> </p>
                        </div>
                        <div className='block2'>
                            <p>Nationality:<span style={{ color: "black" }}> Indian</span> </p>
                        </div>

                    </div>

                </div>
                <div className='tab3'>
                    <div className='intab'>
                        <p>Buisness Details</p>
                        <br />
                        <div className='block1'>
                            <p style={{ color: "black" }}>eLitmus</p>
                        </div>
                        <div className='block1'>
                            <p>Private Limited</p>
                        </div>
                        <div className='block1'>
                            <p> Primary Currency:<span style={{ color: "black" }}> USD</span> </p>
                        </div>
                        <div className='block1'>
                            <p>307, B block, Habitat Green apartment, Lane 7c,<br />
                                751031</p>
                        </div>
                    </div>



                </div>



            </div>
        </div>
    )
}
