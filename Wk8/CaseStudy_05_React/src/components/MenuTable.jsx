import React, { useState, useEffect } from 'react';
import config from '../config.js'

const MenuTable = () => {
    const [menuItems, setMenuItems] = useState([
        {
            name: 'Just Java',
            description: 'Regular House blend, decaffeinated coffee, or flavor of the day. Endless Cup.',
            price: 2.00,
            quantity: 0,
            subtotal: 0,
            selectedPriceOption: 2.00
        },
        {
            name: 'Cafe au Lait',
            description: 'House blended coffee infused into a smooth, steamed milk.',
            priceOptions: [2.00, 3.00],
            price: 2.00,
            quantity: 0,
            subtotal: 0,
            selectedPriceOption: 2.00
        },
        {
            name: 'Iced Cappucino',
            description: 'Sweetened espresso blended with icy-cold milk and served in a chilled glass.',
            priceOptions: [4.75, 5.75],
            price: 4.75,
            quantity: 0,
            subtotal: 0,
            selectedPriceOption: 4.75
        }
    ]);

    useEffect(() => {
        fetch('http://localhost:8000/gshi005/Documents/ie4727/Wk8/CaseStudy_05/menuGetPrice.php')
        fetch(config['php_file_location'] + 'menuGetPrice.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (!data) {
                    throw new Error('Data is undefined');
                }
                console.log('Fetched data:', data); // Log the fetched data
                const newPrices = [
                    {
                        name: 'Just Java',
                        description: 'Regular House blend, decaffeinated coffee, or flavor of the day. Endless Cup.',
                        price: Number(data.prices[0]['price']),
                        quantity: menuItems[1]['quantity'],
                        subtotal: menuItems[0]['subtotal'],
                        selectedPriceOption: Number(data.prices[0]['price'])
                    },
                    {
                        name: 'Cafe au Lait',
                        description: 'House blended coffee infused into a smooth, steamed milk.',
                        priceOptions: [Number(data.prices[1]['price']), Number(data.prices[2]['price'])],
                        price: 2.00,
                        quantity: menuItems[1]['quantity'],
                        subtotal: menuItems[1]['subtotal'],
                        selectedPriceOption: menuItems[1]['selectedPriceOption']
                    },
                    {
                        name: 'Iced Cappucino',
                        description: 'Sweetened espresso blended with icy-cold milk and served in a chilled glass.',
                        priceOptions: [Number(data.prices[3]['price']), Number(data.prices[4]['price'])],
                        price: 4.75,
                        quantity: menuItems[2]['quantity'],
                        subtotal: menuItems[2]['subtotal'],
                        selectedPriceOption: menuItems[2]['selectedPriceOption']
                    }
                ]
                setMenuItems(newPrices)
            })
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    const updateQuantity = (index, quantity) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].quantity = quantity;
        updatedMenuItems[index].subtotal = quantity * updatedMenuItems[index].selectedPriceOption;
        setMenuItems([...updatedMenuItems]);
        console.log(menuItems)
    };

    const updatePriceOption = (index, priceOption) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].selectedPriceOption = priceOption;
        updatedMenuItems[index].subtotal = updatedMenuItems[index].quantity * priceOption;
        setMenuItems([...updatedMenuItems]);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        menuItems.forEach((menuItem) => {
            totalPrice += menuItem.subtotal;
        });
        return totalPrice;
    };

    const checkout = () => {
        const checkoutItems = {
            javaQuantity: menuItems[0]['quantity'],
            javaSubtotal: menuItems[0]['subtotal'],
            cafeDrinkId: menuItems[1]['priceOptions'].indexOf(menuItems[1]['selectedPriceOption']) == 0 ? 1 : 2,
            cafeQuantity: menuItems[1]['quantity'],
            cafeSubtotal: menuItems[1]['subtotal'],
            cappDrinkId: menuItems[2]['priceOptions'].indexOf(menuItems[2]['selectedPriceOption']) == 0 ? 3 : 4,
            cappQuantity: menuItems[2]['quantity'],
            cappSubtotal: menuItems[2]['subtotal']
        }
        console.log(checkoutItems)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((menuItem, index) => (
                        <tr key={index}>
                            <td className="menu-item"><strong>{menuItem.name}</strong></td>
                            <td>{menuItem.description}</td>
                            <td>
                                {menuItem.priceOptions ? (
                                    <div>
                                        {menuItem.priceOptions.map((priceOption, priceIndex) => (
                                            <div key={priceIndex}>
                                                <input
                                                    type="radio"
                                                    name={`price-${index}`}
                                                    value={priceOption}
                                                    checked={menuItem.selectedPriceOption === priceOption}
                                                    onChange={() => updatePriceOption(index, priceOption)}
                                                />
                                                {priceOption === 2.00 || priceOption === 3.00 ? (
                                                    `Single $${priceOption.toFixed(2)}`
                                                ) : (
                                                    `Double $${priceOption.toFixed(2)}`
                                                )}
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    `$${menuItem.price.toFixed(2)}`
                                )}
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={menuItem.quantity}
                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                />
                            </td>
                            <td>${menuItem.subtotal.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <h2>Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
            <button onClick={checkout}> Checkout </button>
            </table>
            
        </div>
    );
};

export default MenuTable;