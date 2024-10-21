import React, { useState } from 'react';
import config from '../config.js'

const MenuEditTable = () => {
    const [chosenItem, setChosenItem] = useState(0);
    const [cafeChoice, setCafeChoice] = useState('single');
    const [cappChoice, setCappChoice] = useState('single');

    const handleCafeChoiceChange = (event) => {
        setCafeChoice(event.target.value);
        console.log(event.target.value);
        if (cafeChoice === 'single') {
            setChosenItem(2);
        } else if (cafeChoice === 'double') {
            setChosenItem(3);
        }
        console.log(chosenItem)
    };

    const handleCappChoiceChange = (event) => {
        setCappChoice(event.target.value);
        if (cappChoice === 'single') {
            setChosenItem(4);
        } else if (cappChoice === 'double') {
            setChosenItem(5);
        }

    };

    const updateJava = async () => {
        setChosenItem(1);
        let newPrice = prompt("Set new price for Just Java: ");
        if (newPrice == null || newPrice.trim() == "") {
            alert("Price not updated");
            return;
        } else {
            let data = {
                id: chosenItem,
                price: newPrice
            };
            const formBody = Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody
            };
            const response = await fetch(config['php_file_location'] + 'menuUpdate.php', requestOptions);
            alert('Price Updated'); // Alert the user that the checkout was successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
        }
    };

    const updateCafe = async () => {
        console.log("From UpdateCafe: " + chosenItem);
        let newPrice = prompt("Set new price for Just Java: ");
        if (newPrice == null || newPrice.trim() === "") {
            alert("Price not updated");
            return;
        } else {
            let data = {
                id: chosenItem,
                price: newPrice
            };
            console.log(data)
            const formBody = Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody
            };
            const response = await fetch(config['php_file_location'] + 'menuUpdate.php', requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            alert('Price Updated'); // Alert the user that the price was updated successfully
        }
    };

    const updateCapp = async () => {
        let newPrice = prompt("Set new price for Just Java: ");
        if (newPrice == null || newPrice.trim() === "") {
            alert("Price not updated");
            return;
        } else {
            let data = {
                id: chosenItem,
                price: newPrice
            };
            const formBody = Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody
            };
            const response = await fetch(config['php_file_location'] + 'menuUpdate.php', requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            alert('Price Updated'); // Alert the user that the price was updated successfully
        }
    };

    return (
        <>
            <div className="menu">
                <table>
                    <tr>
                        <td><button onClick={updateJava}>Update</button></td>
                        <td className="menu-item"><strong>Just Java</strong></td>
                        <td>Regular House blend, decaffeinated coffee, or flavor of the day. <br/>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td><button onClick={updateCafe}>Update</button></td>
                        <td className="menu-item"><strong>Cafe au Lait</strong></td>
                        <td>House blended coffee infused into a smooth, steamed milk. <br/>
                        </td>
                        <td>
                            <input
                                name="cafechoice"
                                type="radio"
                                id="cafechoice-single"
                                value="single"
                                checked={cafeChoice === 'single'}
                                onChange={handleCafeChoiceChange}
                            />Single<br />
                            <input
                                name="cafechoice"
                                type="radio"
                                id="cafechoice-double"
                                value="double"
                                checked={cafeChoice === 'double'}
                                onChange={handleCafeChoiceChange}
                            />Double
                        </td>
                    </tr>
                    <tr>
                        <td><button onClick={updateCapp}>Update</button></td>
                        <td className="menu-item"><strong>Iced Cappucino</strong></td>
                        <td>Sweetened espresso blended with icy-cold milk and served in a chilled glass. <br/>
                        </td>
                        <td>
                            <input
                                name="cappchoice"
                                type="radio"
                                id="cappchoice-single"
                                value="single"
                                checked={cappChoice === 'single'}
                                onChange={handleCappChoiceChange}
                            />Single<br />
                            <input
                                name="cappchoice"
                                type="radio"
                                id="cappchoice-double"
                                value="double"
                                checked={cappChoice === 'double'}
                                onChange={handleCappChoiceChange}
                            />Double
                        </td>
                    </tr>
                </table>
                <br/>
            </div>
        </>
    );
};

export default MenuEditTable;