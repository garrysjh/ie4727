import './styles/reset.css'
import './styles/menu.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { useEffect, useState } from 'react';

function Dashboard() {
    // const [bestseller, setBestseller] = useState("Unknown");
    // const [bestsellerCount, setBestsellerCount] = useState(0);
    // useEffect(() => {
    //     const fetchBestseller = async () => {
    //         try {
    //             const response = await fetch(config['php_file_location'] + 'reportGetBestseller.php');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok ' + response.statusText);
    //             }
    //             const data = await response.json();
    //             if (!data) {
    //                 throw new Error('Data is undefined');
    //             }
    //             console.log(data);
    //             setBestseller(data.bestseller);
    //             setBestsellerCount(data.bestsellerCount);
    //         } catch (error) {
    //             console.error('Error fetching bestseller:', error);
    //         }
    //     };

    //     fetchBestseller();
    // }, []);
    return (
        <div>
            <Navbar />
            <div className="main-body">
                <div className="main-title">
                    <h2>Dashboards</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
