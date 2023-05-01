import React from 'react'
import Sidebar from '../components/Sidebar'
import AccountBar from '../components/AccountBar'

export default function Accounts() {
    return (
        <div className='accountBody'>
            <div className=' leftBar'>
                <Sidebar />
            </div>
            <AccountBar />
        </div>
    )
}
