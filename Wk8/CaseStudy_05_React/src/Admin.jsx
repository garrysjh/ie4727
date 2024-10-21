import './styles/reset.css'
import './styles/music.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import flower from './assets/flower.jpg'

function Admin() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2>Admin Management Page</h2>
            <h2><a href="menuedit">Edit Menu</a></h2>
        </div>
    </div>
      <Footer/>
      </div>
  )
}

export default Admin
