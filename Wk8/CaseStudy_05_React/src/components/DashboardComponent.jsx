import React, { useState, useEffect } from 'react';
import config from '../config';



const DashboardComponent = () => {
    const [bestseller, setBestseller] = useState("Unknown");
    const [bestsellerCount, setBestsellerCount] = useState(0);
    useEffect(() => {
        const fetchBestseller = async () => {
            try {
                const response = await fetch(config['php_file_location'] + 'reportGetBestseller.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('Data is undefined');
                }
                console.log(data);
                setBestseller(data.bestseller);
                setBestsellerCount(data.bestsellerCount);
            } catch (error) {
                console.error('Error fetching bestseller:', error);
            }
        };

        fetchBestseller();
    }, []);

    return (
        <>
            <p>Compnent </p>
        </>
    );
};

export default DashboardComponent;