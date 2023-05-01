import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./modules/Login";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Dashboard from "./modules/Dashboard";
import MainSignup from "./modules/MainSignup";
import Activities from "./modules/Activities";
import Accounts from "./modules/Accounts";
import Failed from "./components/Failed";

import './css/Login.css'
import './css/Cred.css'
import './css/BscDet.css'
import './css/LastSteps.css'
import './css/Successful.css'
import './css/Dashboard.css'
import './css/Accounts.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<MainSignup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/failed" element={<Failed />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
