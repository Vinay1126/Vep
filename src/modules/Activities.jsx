import React, { useState } from 'react'
import ActivityData from '../components/ActivityData';
import Info1 from '../components/Info1';
import Info2 from '../components/Info2';
import Info3 from '../components/Info3';

export default function Activities() {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <>
            {currentPage === 0 && (
                <ActivityData
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 1 && (
                <Info1
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 2 && (
                <Info2
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 3 && (
                <Info3
                    setCurrentPage={setCurrentPage}
                />
            )}
        </>
    )
}
