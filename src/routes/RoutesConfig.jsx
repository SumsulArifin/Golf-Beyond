
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFoundRoutes from './NotFoundRoutes'
import UnderDevelopment from '../pages/underDevelopment/UnderDevelopment'
import LifeStyle from '../pages/lifeStyle/LifeStyle'
import MagazineIssues from '../pages/magazineIssues/MagazineIssues'
import DigitalContent from '../pages/digitalContent/DigitalContent'
import Tournaments from '../pages/tournaments/Tournaments'
import SponsorshipAndAds from '../pages/sponsorshipAndAds/SponsorshipAndAds'
import AboutUs from '../pages/aboutUs/AboutUs'
import Subscribe from '../pages/subscibe/Subscribe'
import Golf from '../pages/golf/Golf'
import BeyondGolf from '../pages/beyondGolf/BeyondGolf'

const RoutesConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/golf' element={<UnderDevelopment/>}/>
            <Route path='/beyond-golf' element={<UnderDevelopment/>}/>
            <Route path='/lifestyle' element={<LifeStyle/>}/>
            <Route path='/magazine-issues' element={<MagazineIssues/>}/>
            <Route path='/digital-content' element={<UnderDevelopment/>}/>
            <Route path='/tournaments' element={<UnderDevelopment/>}/>
            <Route path='/sponsorship-ads' element={<UnderDevelopment/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/subscribe' element={<UnderDevelopment/>}/>
            <Route path='/not-found/*' element={<NotFoundRoutes/>}/>
            <Route path='/*' element={<Navigate to='not-found' />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig