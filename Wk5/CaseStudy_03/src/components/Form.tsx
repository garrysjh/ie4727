import { useState } from "react"
import { ChangeEvent, FormEvent } from "react"
import '../styles/form.css'

export function Form() {
    const [registered, setRegistered] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Validation of username depends on conditions
        if (formData['username'].length < 8) {
            console.log("Your username is not longer than 8 characters")
        }
        // Validation of email is done in the input type. But we can specify special conditions with string formatting or regex
        if (!formData['email'].includes('gmail')) {
            console.log("Your email does not contain Gmail!");
        }
        // Validate that password has to be at least 8 characters, and confirm password is same as password
        if (formData['password'].length < 8) {
            alert("Your password has to be 8 characters or more.")
        }
        else if (formData['password'] != formData['confirmPassword']) {
            alert("Your password is not the same as your confirmed password.")
        }
        else {
            setRegistered(true)
        }
    }
    return (
        <div className="registrationForm">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label><h3>Username: </h3>
                    <input type="text" name="username" placeholder="username" onChange={(e) => changeHandler(e)} />
                </label>
                <label><h3>Email: </h3>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={(e) => changeHandler(e)} />
                </label>
                <label><h3>Password: </h3>
                    <input type="password" name="password" placeholder="********" onChange={(e) => changeHandler(e)} />
                </label>
                <label><h3>Confirm Password: </h3>
                    <input type="password" name="confirmPassword" placeholder="********" onChange={(e) => changeHandler(e)} />
                </label>
                <label>
                    <h3>
                        <input type="submit" value="Submit" />
                    </h3>
                </label>
                {registered ? (
                    <div>Registration Successful</div>
                ): <></>}
            </form>
        </div>
    )
}