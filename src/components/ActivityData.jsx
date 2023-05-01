import React, { useState } from 'react';
import '../css/ActData.css'
import Sidebar from '../components/Sidebar'
import { ActTableData } from './ActTableData';

export default function ActivityData(props) {
    const [count, setCount] = useState(0);
    const test = () => {

        console.log(count);
        if (count == 1)
            props.setCurrentPage(1);
        if (count == 2)
            props.setCurrentPage(2);
        if (count == 3)
            props.setCurrentPage(3);
    }

    return (
        <div className='actshow'>
            <div className=' actBar'>
                <Sidebar />
            </div>

            <h4 className='topText'>Activities</h4>
            <div className='headerText'>
                <h5>From/To</h5>
                <h5 className='textGap1'>Time & Date</h5>
                <h5 className='textGap2'>Account</h5>
                <h5 className='textGap3'>Amount</h5>

            </div>
            <div class="table-wrapper-scroll-y my-custom-scrollbar dataTable">

                <table class=" rowGap table" onClick={test}>

                    <tbody>

                        <tr className='textSize' onClick={
                            () => {
                                setCount(1);
                            }
                        } >
                            {/* <th scope="row">1</th> */}

                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td className='incGap'>12:00 PM</td>
                            <td className='incGap'>From ******9876</td>
                            <td className='incGap'><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize' onClick={
                            () => {
                                setCount(2);
                            }
                        }>

                            {/* <th scope="row">2</th> */}

                            <td><img className='tableImg' src='\Images\Group 872.png' />Added to wallet</td>
                            <td>12:00 PM</td>
                            <td>From ******9876</td>
                            <td style={{ color: 'rgba(41, 204, 122, 1)' }}><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize' onClick={
                            () => {
                                setCount(3);
                            }
                        }>
                            {/* <th scope="row">3</th> */}
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Recieved from Sai Swarup</td>
                            <td>12:00 PM</td>
                            <td>to Wallet</td>
                            <td style={{ color: 'rgba(41, 204, 122, 1)' }}><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td>25 May</td>
                            <td>From ******9876</td>
                            <td><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Recieved to Sai Swarup</td>
                            <td>25 May</td>
                            <td>to Wallet</td>
                            <td style={{ color: 'rgba(41, 204, 122, 1)' }}><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Recieved to Sai Swarup</td>
                            <td>25 May</td>
                            <td>to Wallet</td>
                            <td style={{ color: 'rgba(41, 204, 122, 1)' }}><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td>25 May</td>
                            <td>From ******9876</td>
                            <td><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            {/* <th scope="row">6</th> */}
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td>25 May</td>
                            <td>From ******9876</td>
                            <td><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            {/* <th scope="row">6</th> */}
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td>25 May</td>
                            <td>From ******9876</td>
                            <td><b>$ 999.00</b></td>
                        </tr>
                        <tr className='textSize'>
                            <td><img className='tableImg' src='\Images\Mask Group.png' />Paid to Sai Swarup</td>
                            <td>25 May</td>
                            <td>From ******9876</td>
                            <td><b>$ 999.00</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>



        </div >


    );
};