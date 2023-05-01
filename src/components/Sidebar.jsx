import React from 'react'
import { SidebarDetails } from './SidebarDetails'
import { useNavigate } from 'react-router-dom'
import '../css/Sidebar.css'

export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <div>
            <img className='vepsbar' src='\Images\Group 941.png' />
            <br /><br /><br /><br />
            <div className='sideBar'>{
                SidebarDetails.map((val, key) => {
                    return (
                        <div
                            key={key}
                            onClick={() => {
                                const path = val.link;
                                navigate('/' + path);
                            }}
                        >
                            <div>
                                {/* {val.icon} */}
                                <img className='sideimg' src={val.imgUrl} />
                                <br /><br /><br />
                            </div>
                        </div>
                    )
                })
            }</div>
        </div>

    )
}
