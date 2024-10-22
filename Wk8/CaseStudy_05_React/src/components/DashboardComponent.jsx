import React, { useState, useEffect } from 'react';
import config from '../config';

const DashboardComponent = () => {
    const [bestseller, setBestseller] = useState("Unknown");
    const [bestsellerCount, setBestsellerCount] = useState(0);
    const [chosenDashboard, setChosenDashboard] = useState('product');
    const [totalSales, setTotalSales] = useState(0);
    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
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
                setBestseller(data.maxItem);
                setBestsellerCount(data.maxQuantity);
            } catch (error) {
                console.error('Error fetching bestseller:', error);
            }
        };

        const fetchProductData = async () => {
            try {
                const response = await fetch(config['php_file_location'] + 'reportGetSalesByProduct.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('Data is undefined');
                }
                setTotalSales(data.total);
                const productData =[
                    { name: 'Just Java', quantity: data.javaQuantity, subtotal: data.javaSubtotal },
                    { name: 'Cafe au Lait Single', quantity: data.cafeSingleQuantity, subtotal: data.cafeSingleSubtotal },
                    { name: 'Cafe au Lait Double', quantity: data.cafeDoubleQuantity, subtotal: data.cafeDoubleSubtotal },
                    { name: 'Iced Cappucino Single', quantity: data.cappSingleQuantity, subtotal: data.cappSingleSubtotal },
                    { name: 'Iced Cappucino Double', quantity: data.cappDoubleQuantity, subtotal: data.cappDoubleSubtotal }
                ]
                setProductData(productData);


            } catch (error) {
                console.error('Error fetching bestseller:', error);
            }
        };

        const fetchCategoryData = async () => {
            try {
                const response = await fetch(config['php_file_location'] + 'reportGetSalesByCategory.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('Data is undefined');
                }
                const categoryData =[
                    { name: 'Null', quantity: data.nullQuantity, subtotal: data.nullSubtotal },
                    { name: 'Single', quantity: data.singleQuantity, subtotal: data.singleSubtotal },
                    { name: 'Double', quantity: data.doubleQuantity, subtotal: data.doubleSubtotal },
                ]
                setCategoryData(categoryData);


            } catch (error) {
                console.error('Error fetching bestseller:', error);
            }
        };
        


        fetchBestseller();
        fetchProductData();
        fetchCategoryData();

    }, []);

    return (
        <>
            <h3>Bestseller: {bestseller}</h3>
            <h3>Number sold: {bestsellerCount}</h3>
            <br/>
            <button onClick={()=>{setChosenDashboard('product')}}> Product </button>/
            <button onClick={()=>{setChosenDashboard('category')}}> Category </button>
            <br/>
            {chosenDashboard === 'product' ? 
            (<><table>
                {productData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.subtotal}</td>
                        </tr>
                    )
                })}
             </table>
            </>
        ) : (<><table>
            {categoryData.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.quantity}</td>
                        <td>{val.subtotal}</td>
                    </tr>
                )
            })}
         </table>
        </>
    )}
        <h2>Total: {totalSales}</h2>   
        </>
    );
};

export default DashboardComponent;