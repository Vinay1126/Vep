import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const SidebarDetails = [
    {
        id: 1,
        icon: <HomeIcon />,
        imgUrl: "Images/Vector (13).png",
        link: "dashboard"
    },
    {
        id: 2,
        icon: <SwapHorizIcon />,
        imgUrl: "\Images/Vector (14).png",
        link: "activities"
    },
    {
        id: 3,
        icon: <AccountBalanceWalletIcon />,
        imgUrl: "\Images/Vector (15).png",
        link: "failed"
    },
    {
        id: 4,
        icon: <PersonIcon />,
        imgUrl: "\Images/Vector (16).png",
        link: "accounts"
    },
    {
        id: 5,
        icon: <NotificationsIcon />,
        imgUrl: "\Images/Vector (17).png",
        link: "failed"
    },
    {
        id: 6,
        icon: <PowerSettingsNewIcon />,
        imgUrl: "\Images/Vector (18).png",
        link: ""
    }
]
