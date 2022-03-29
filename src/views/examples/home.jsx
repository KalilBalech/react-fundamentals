import react from "react";
import "./home.css"
import InputField from "../../components/basics/input-field.jsx"
import Button from "../../components/basics/button.jsx"
import Card from "../../components/basics/card"

const home = (props) => {
    return (
        <div className="home">
            <div id="left-logo">
                <img src="https://www.aludesign.pl/wp-content/uploads/2021/07/Facebook-Logo.png" alt="" />
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div id="right-login">
                <Card color="white">
                    <InputField type="email" placeholder="Email address or phone number" />
                    <InputField type="password" placeholder="Password" />
                    <Button title= "Log In" color="#1877f2" width="100%" />
                    <a href="#">Forgotten password?</a>
                    <hr />
                    <Button title= "Create New Account" color="#42b72a" width="fit-content" />
                </Card>
                <p><strong>Create a Page</strong> for a celebrity, brand or business</p>
            </div>
        </div>
    )
}

export default home