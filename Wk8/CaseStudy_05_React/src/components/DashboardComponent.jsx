import React, { useState, useEffect } from 'react';
import config from '../config';

const DashboardComponent = () => {
    const [bestseller, setBestseller] = useState("Unknown");
    const [bestsellerCount, setBestsellerCount] = useState(0);
    const [chosenDashboard, setChosenDashboard] = useState('product');
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
                setBestseller(data.maxItem);
                setBestsellerCount(data.maxQuantity);
            } catch (error) {
                console.error('Error fetching bestseller:', error);
            }
        };

        fetchBestseller();
    }, []);

    return (
        <>
            <h3>Bestseller: {bestseller}</h3>
            <h3>Number sold: {bestsellerCount}</h3>
            <br/>
            <button onClick={()=>{setChosenDashboard('product')}}> Product </button>/
            <button onClick={()=>{setChosenDashboard('category')}}> Category </button>
            <br/>
            {chosenDashboard === 'product' ? <p>Product</p> : <p>Category</p>}
        </>
    );
};

export default DashboardComponent;