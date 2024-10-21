import './styles/reset.css'
import './styles/index.css'
import windingRoad from './assets/winding-road.webp'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2> Follow the Winding Road to JavaJam</h2>
        </div>
        <img src={windingRoad}/>
        <div className="main-body-secondary">
            <ul>
                <li>Specialty Coffee and Tea</li>
                <li>Bagels, Muffins, and Organic Snacks</li>
                <li>Music and Poetry Readings</li>
                <li>Open Mic Night Every Friday</li>
            </ul>
            <p>
                54321 Route 42 <br/>
                Ellison Bay, WI 54210 <br/>
                888-555-8888
            </p>
        </div>

      </div>
      <Footer/>
      </div>
  )
}

export default App
