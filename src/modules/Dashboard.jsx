import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
    return (
        <div className='dash outerBar'>
            <Sidebar />
            <div className='rightDash'>
                <img className='abhijeetimg' src='\Images\Mask Group.png' />
                <div className='namedash'>
                    <h4>Hello, Abhijeet!</h4>
                    <p>@abhijeeeeeeet</p>
                </div>
                <div className='midText'>
                    <div className='bal'>
                        <h6>Wallet Balance</h6>
                        <br />
                        <h1>$ 0.00</h1>
                        <div className='checkoptns'>
                            <h6 className='withdrawtxtdash'>WITHDRAW</h6>
                            <img className='lindash' src='\Images\Line 16.png' />
                            <h6 className='baltxtdash'>ADD BALANCE</h6>
                        </div>
                    </div>

                </div>
                <div className='dashrightmost'>
                    <img src='\Images\Frame 9.png' />
                    <img className='gap2' src='\Images\Frame 7.png' />
                </div>
                <div className='utilsdash'>
                    <div className='waldash'>
                        <img src='\Images\Frame 12.png' />
                        <div className='textdash'>
                            <h5>Wallet</h5>
                            <p>USD wallet</p>
                        </div>
                    </div>
                    <div className='transdash'>
                        <img src='\Images\Frame 10.png' />
                        <div className='textdash'>
                            <h5>Transactions</h5>
                            <p>209 transactions</p>
                        </div>
                    </div>
                    <div className='waldash accdash'>
                        <img src='\Images\Frame 12 (1).png' />
                        <div className='textdash'>
                            <h5>Banks Accounts</h5>
                            <p>03 Bank accounts</p>
                        </div>
                    </div>
                    <div className='transdash carddash'>
                        <img src='\Images\Frame 10 (1).png' />
                        <div className='textdash'>
                            <h5>Cards</h5>
                            <p>03 cards</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='manimg' src='\Images\undraw_make_it_rain_iwk4 1.png' />
            <div className='bottomtxt'>
                <p>No transactions yet!!!</p>
                <h5 className='p'>Start making payments through Vep and<br /> now you can send Invoice also.</h5>
            </div>
        </div>
    )
}
