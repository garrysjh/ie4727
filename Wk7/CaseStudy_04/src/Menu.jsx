import './styles/reset.css'
import './styles/menu.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MenuTable from './components/MenuTable.jsx';

function Menu() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2>Coffee at JavaJam</h2>
        </div>
        <div className="menu">
        <MenuTable/>
    </div>
    </div>
      <Footer/>
      </div>
  )
}

export default Menu
