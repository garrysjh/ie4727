import './styles/reset.css'
import './styles/menu.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function Menu() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2>Coffee at JavaJam</h2>
        </div>
        <div className="menu">
        <table>
            <tr>
                <td className="menu-item"><strong>Just Java</strong></td>
                <td>Regular House blend, decaffeinated coffee, or flavor of the day. <br/>
                    <strong>Endless Cup $2.00</strong>
                </td>
            </tr>
            <tr>
                <td className="menu-item"><strong>Cafe au Lait</strong></td>
                <td>House blended coffee infused into a smooth, steamed milk. <br/>
                    <strong>Single $2.00 Double $3.00</strong>
                </td>
            </tr>
            <tr>
                <td className="menu-item"><strong>Iced Cappucino</strong></td>
                <td>Sweetened espresso blended with icy-cold milk and served in a chilled glass. <br/>
                    <strong>Single $4.75 Double $5.75</strong>
                </td>
            </tr>
        </table>
    </div>
    </div>
      <Footer/>
      </div>
  )
}

export default Menu
