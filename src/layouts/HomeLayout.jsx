/* eslint-disable react/prop-types */

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

const HomeLayout = ({ children }) => {
    return (
        <main>
            <MainHeader/>
            {children}
            <MainFooter />
        </main>
    )
}

export default HomeLayout