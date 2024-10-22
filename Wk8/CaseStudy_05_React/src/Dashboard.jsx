import './styles/reset.css'
import './styles/menu.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DashboardComponent from './components/DashboardComponent.jsx';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="main-body">
                <div className="main-title">
                    <h2>Dashboards</h2>
                    <DashboardComponent/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
