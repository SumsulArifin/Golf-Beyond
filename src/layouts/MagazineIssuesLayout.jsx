/* eslint-disable react/prop-types */

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

const MagazineIssuesLayout = ({ children }) => {
    return (
        <main>
            <MainHeader/>
            {children}
            <MainFooter />
        </main>
    )
}

export default MagazineIssuesLayout;

