import AboutUs from '@/components/application/AboutUs'
import FAQChatStyle from '@/components/application/FAQ'
import PolicyPage from '@/components/application/Policy'
import WhoWeAre from '@/components/application/WhoWeAre'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <WhoWeAre />
      <AboutUs />
      <FAQChatStyle />
      <PolicyPage />
    </div>
  )
}

export default AboutPage
