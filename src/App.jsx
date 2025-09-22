import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import OurStory from './OurStory/OurStory'
import OurCapabilities from './OurCapabilities/OurCapabilities'
import CallToAction from './CallToAction/CallToAction'
import Footer from './Footer/Footer'
import CopyRight from './CopyRight/CopyRight'
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton'

export default function App() {


  return (
    <>
      <Hero />
      <Header />
      <OurStory />
      <OurCapabilities />
      <CallToAction />
      <Footer />
      <CopyRight />

      <ScrollToTopButton/>
    </>
  )
}