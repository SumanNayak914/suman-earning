import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeatureSection from '../components/home/FeatureSection'
import ContentSections from '../components/home/ContentSections'

const Home = () => {
  return (
    
    <div className='relative'> 
      
      <HeroSection />
      <FeatureSection />
      <ContentSections />
      
    </div>
  )
}

export default Home