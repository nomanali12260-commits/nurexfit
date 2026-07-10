import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedCollection from './components/FeaturedCollection'
import WhyNurexfit from './components/WhyNurexfit'
import VideoBanner from './components/VideoBanner'
import Lookbook from './components/Lookbook'
import Instagram from './components/Instagram'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCollection />
      <WhyNurexfit />
      <VideoBanner />
      <Lookbook />
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  )
}
