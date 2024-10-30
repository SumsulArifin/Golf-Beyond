import React from 'react'
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const AboutUsLayout = ({ children }) => {
    return (
        <main>
            <MainHeader />
            {children}
            <MainFooter />
        </main>
    )
}

export default AboutUsLayout;