import React, { useState, useEffect } from 'react';

const MenuTable = () => {
    const [menuItems, setMenuItems] = useState([
        {
            name: 'Just Java',
            description: 'Regular House blend, decaffeinated coffee, or flavor of the day. Endless Cup.',
            price: 2.00,
            quantity: 0,
            subtotal: 0
        },
        {
            name: 'Cafe au Lait',
            description: 'House blended coffee infused into a smooth, steamed milk.',
            priceOptions: [2.00, 3.00],
            price: 2.00,
            quantity: 0,
            subtotal: 0
        },
        {
            name: 'Iced Cappucino',
            description: 'Sweetened espresso blended with icy-cold milk and served in a chilled glass.',
            priceOptions: [4.75, 5.75],
            price: 4.75,
            quantity: 0,
            subtotal: 0
        }
    ]);

    useEffect(() => {
        fetch('http://localhost:8000/gshi005/Documents/ie4727/Wk8/CaseStudy_05/menuGetPrice.php')
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
                console.log(data.prices[0]['price'])
                const newPrices = [
                    {
                        name: 'Just Java',
                        description: 'Regular House blend, decaffeinated coffee, or flavor of the day. Endless Cup.',
                        price: Number(data.prices[0]['price']),
                        quantity: 0,
                        subtotal: 0
                    },
                    {
                        name: 'Cafe au Lait',
                        description: 'House blended coffee infused into a smooth, steamed milk.',
                        priceOptions: [Number(data.prices[1]['price']), Number(data.prices[2]['price'])],
                        price: 2.00,
                        quantity: 0,
                        subtotal: 0
                    },
                    {
                        name: 'Iced Cappucino',
                        description: 'Sweetened espresso blended with icy-cold milk and served in a chilled glass.',
                        priceOptions: [Number(data.prices[3]['price']), Number(data.prices[4]['price'])],
                        price: 4.75,
                        quantity: 0,
                        subtotal: 0
                    }
                ]
                setMenuItems(newPrices)
            })
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    const updateQuantity = (index, quantity) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].quantity = quantity;
        updatedMenuItems[index].subtotal = quantity * updatedMenuItems[index].price;
        setMenuItems([...updatedMenuItems]);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        menuItems.forEach((menuItem) => {
            totalPrice += menuItem.subtotal;
        });
        return totalPrice;
    };

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
                                                    checked={menuItem.price === priceOption}
                                                    onChange={() => {
                                                        const updatedMenuItems = [...menuItems];
                                                        updatedMenuItems[index].price = priceOption;
                                                        setMenuItems([...updatedMenuItems]);
                                                    }}
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
            </table>
            <h2>Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
        </div>
    );
};

export default MenuTable;