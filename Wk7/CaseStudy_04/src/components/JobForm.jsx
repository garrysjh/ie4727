import { useState } from "react"

export default function JobForm() {
    const [registered, setRegistered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        startDate: '',
        experience: ''
    })
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validation of username depends on conditions
        if (!/^[a-zA-Z\s]+$/.test(formData['name'])) {
            alert("Your name can only contain alphabet characters and spaces");
        }
        // Validation of email is done in the input type. But we can specify special conditions with string formatting or regex
        else if (!formData['email'].includes('@') || !/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,3}$/.test(formData['email'].split('@')[1])) {
            alert("Please enter a valid email address!");
        }
        // Validate that password has to be at least 8 characters, and confirm password is same as password
        if (formData['startDate'] == "") {
            alert("Start date cannot be empty!")
        }
        else if (formData['startDate']) {
            const today = new Date();
            const selectedDate = new Date(formData['startDate']);
            if (selectedDate <= today) {
            alert("Start date cannot be today or in the past.");
        }
        }
        else if (!formData['experience']) {
            alert("Experience cannot be empty.");
        }  
        setRegistered(true);
        
        }
    
    return (
        <div className="registrationForm">
            <form onSubmit={(e) => handleSubmit(e)}>
            <table>
                <tr>
                    <td ><label htmlFor="name">*Name:</label></td>
                    <td><input type="text" name="name" size="25" required placeholder="Enter your name here" onChange={(e) => changeHandler(e)}/><br/></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">*E-mail:</label></td>
                    <td><input type="text" name="email" size="25" required placeholder="Enter your Email-ID here" onChange={(e) => changeHandler(e)}/><br/>                                </td>
                </tr>
                <tr>
                    <td><label htmlFor="startDate">Start Date:</label></td>
                    <td><input type="date" name="startDate" onChange={(e) => changeHandler(e)}/><br/></td>
                </tr>
                <tr>
                    <td><label htmlFor="experience">*Experience:</label></td>
                    <td><textarea type="textarea" name="experience" rows="4" cols="40" required placeholder="Enter your past experience here" onChange={(e) => changeHandler(e)}></textarea><br/></td>
                </tr>
            </table>
            <input type="reset" value="Clear"/><br/><br/>
            <input type="submit" value="Apply Now"/><br/><br/>
                {registered ? (
                    <div>Registration Successful</div>
                ) : <></>}
            </form>
        </div>
    )
}