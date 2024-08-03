import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { HomePage } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/Products/Products'
import { ServicesPage } from './pages/Services/Services'
import { ProjectsPage } from './pages/Projects/Projects'
import { AboutUsPage } from './pages/AboutUs/AboutUs'
import { ContactUsPage } from './pages/ContactUs/ContactUs'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about_us' element={<AboutUsPage />} />
        <Route path='/contact_us' element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
