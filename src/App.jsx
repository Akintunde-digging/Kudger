import React from 'react'
import Header from './components/header/header'
import Herosection from './components/herosection/herosection'
import WhatIsKudger from './components/whatiskudger/whatiskudger'
import WhoIsItFor from './components/whoisitfor/whoisitfor'
import HowKudgerWork from './components/howkudgerwork/howkudgerwork'
import WhyChooseKudger from './components/whychoosekudger/whychoosekudger'
import TechnologyBehindKudger from './components/technologybehindkudger/technologybehindkudger'
import ForBusiness from './components/forbusiness/forbusiness'
import TrustedAndSecure from './components/trustedandsecure/trustedandsecure'
import FAQ from './components/faq/faq'
import Ready from './components/ready/ready'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <WhatIsKudger/>
    <WhoIsItFor/>
    <HowKudgerWork/>
    <WhyChooseKudger/>
    <TechnologyBehindKudger/>
    <ForBusiness/>
    <TrustedAndSecure/>
    <FAQ/>
    <Ready/>
    <Footer/>
    </>
  )
}

export default App