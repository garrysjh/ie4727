import { useState } from 'react';

export default function MenuTable() {
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
            price: 2.50,
            quantity: 0,
            subtotal: 0
        },
        {
            name: 'Iced Cappucino',
            description: 'Sweetened espresso blended with icy-cold milk and served in a chilled glass.',
            price: 4.75,
            quantity: 0,
            subtotal: 0
        }
    ]);

    const updateQuantity = (index, quantity) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].quantity = quantity;
        updatedMenuItems[index].subtotal = quantity * updatedMenuItems[index].price;
        setMenuItems(updatedMenuItems);
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
                        <th>Menu Item</th>
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
                                {menuItem.name === 'Cafe au Lait' ? (
                                    <div>
                                        <input
                                            type="radio"
                                            name={`price-${index}`}
                                            value={2.00}
                                            checked={menuItem.price === 2.00}
                                            onChange={() => {
                                                const updatedMenuItems = [...menuItems];
                                                updatedMenuItems[index].price = 2.00;
                                                setMenuItems(updatedMenuItems);
                                            }}
                                        />
                                        Single $2.00
                                        <br />
                                        <input
                                            type="radio"
                                            name={`price-${index}`}
                                            value={3.00}
                                            checked={menuItem.price === 3.00}
                                            onChange={() => {
                                                const updatedMenuItems = [...menuItems];
                                                updatedMenuItems[index].price = 3.00;
                                                setMenuItems(updatedMenuItems);
                                            }}
                                        />
                                        Double $3.00
                                    </div>
                                ) : menuItem.name === 'Iced Cappucino' ? (
                                    <div>
                                        <input
                                            type="radio"
                                            name={`price-${index}`}
                                            value={4.75}
                                            checked={menuItem.price === 4.75}
                                            onChange={() => {
                                                const updatedMenuItems = [...menuItems];
                                                updatedMenuItems[index].price = 4.75;
                                                setMenuItems(updatedMenuItems);
                                            }}
                                        />
                                        Single $4.75
                                        <br />
                                        <input
                                            type="radio"
                                            name={`price-${index}`}
                                            value={5.75}
                                            checked={menuItem.price === 5.75}
                                            onChange={() => {
                                                const updatedMenuItems = [...menuItems];
                                                updatedMenuItems[index].price = 5.75;
                                                setMenuItems(updatedMenuItems);
                                            }}
                                        />
                                        Double $5.75
                                    </div>
                                ) : (
                                    `$${menuItem.price.toFixed(2)}`
                                )}
                                
                            </td>
                            <td>
                                <input
                                    type="number"
                                    min="0"
                                    value={menuItem.quantity}
                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                />
                            </td>
                            <td>${menuItem.subtotal.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
    );
}