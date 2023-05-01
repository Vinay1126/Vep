import React, { useState } from 'react';
import '../css/ActData.css'
import '../css/Info.css'
import Sidebar from '../components/Sidebar'
import CopyAllIcon from '@mui/icons-material/CopyAll';

export default function Info1() {

    return (
        <div className='actshow'>
            <div className=' actBar'>
                <Sidebar />
            </div>
            <h4 className='topText'>Activities</h4>
            <img className='topRight' src='\Images\Group 850.png' />
            <div class="table-wrapper-scroll-y my-custom-scrollbar infoTable">
                <p className='leftShift'>Transaction ID:<span style={{ color: 'black' }}>VE123445DSAD123</span> <span style={{ color: 'rgba(191, 19, 191, 1)' }} className='leftShift'><CopyAllIcon /></span>
                    <img className='rightShift' src='\Images\fluent_checkmark-starburst-20-filled.png' /> <span className='gap' style={{ color: 'rgba(41, 204, 122, 1)' }}>Completed</span>
                </p>
                <p className='leftShift'>12:00 PM, 2nd Feb 2022</p>
                <table class="table upGap">
                    <tbody>
                        <tr className='textSize'>
                            <td><p style={{ color: 'rgba(51, 51, 51, 1)' }} className='leftShift'>Paid to @saiswarupchakra</p><img className='tableImg leftShift' src='\Images\Mask Group.png' />Sai Swarup Chakra</td>
                            <td className=''><p>From</p>$ USD Wallet</td>
                            <td className='infoGap'><p>Amount Paid:</p>$ 999.00</td>
                        </tr>
                    </tbody>
                </table>

                <p className='leftShift'>Message</p>
                <p style={{ color: 'black' }} className='leftShift'>Bussiness dealings</p>
            </div>

        </div >


    );
};