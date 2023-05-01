import React, { useState } from 'react'
import SignUp from './SignUp';
import NewCred from "../components/NewCred";
import BasicDetails from "../components/BasicDetails";
import LastSteps from "../components/LastSteps";
import UserName from "../components/UserName";
import Successful from "../components/Successful";

export default function MainSignup() {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <>
            {currentPage === 0 && (
                <SignUp
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 1 && (
                <NewCred
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 2 && (
                <BasicDetails
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 3 && (
                <LastSteps
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 4 && (
                <UserName
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 5 && (
                <Successful
                    setCurrentPage={setCurrentPage}
                />
            )}
        </>
    )
}
