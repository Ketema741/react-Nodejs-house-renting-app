import React, { useEffect, useContext} from 'react'
import Homes from '../houses/Homes'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
  const authContext = useContext(AuthContext)

    const { loadUser } = authContext;

    useEffect(() => {
        loadUser()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className="container">
        <Navbar />
        <Homes />
        <Footer />
    </div>
  )
}

export default Home
