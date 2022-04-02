import react, {useState} from "react";
import "./home.css"
import InputField from "../../components/basics/input-field.jsx"
import Button from "../../components/basics/button.jsx"
import Card from "../../components/basics/card"

const UseStatehome = (props) => {

    const [color, setColor] = useState("#1877f2")
    const [socialMedia, setSocialMedia] = useState("Facebook")
    const [logo, setLogo] = useState("https://www.aludesign.pl/wp-content/uploads/2021/07/Facebook-Logo.png")

    const setColorInstagram = () => setColor("#d15188")
    const setSocialMediaInstagram = () => setSocialMedia("Instagram")
    const setLogoInstagram = () => setLogo("https://noticiartec.com/wp-content/uploads/2021/06/instagram-1.jpg")

    function instagram(){
        setColorInstagram()
        setSocialMediaInstagram()
        setLogoInstagram()
    }
    
    function twitter(){
        setColor("#5ba0d3")
        setSocialMedia("Twitter")
        setLogo("data:image/png;base64,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")
    }
    
    function tiktok(){
        setColor("black")
        setSocialMedia("Tik Tok")
        setLogo("data:image/png;base64,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")
    }
    
    return (
        <div className="all-home">
            <div className="home">
                <div id="left-logo">
                    <img src={logo}  alt="" />
                    <h2>{socialMedia} helps you connect and share with the people in your life.</h2>
                </div>
                <div id="right-login">
                    <Card color="white">
                        <InputField type="email" placeholder="Email address or phone number" />
                        <InputField type="password" placeholder="Password" />
                        <Button title="Log In" color={color} width="100%" />
                        <a href="#">Forgotten password?</a>
                        <hr />
                        <Button title="Create New Account" color="#42b72a" width="fit-content" />
                    </Card>
                    <p><strong>Create a Page</strong> for a celebrity, brand or business</p>
                </div>
            </div>
            <div className="buttons">
                <Button title="Go to Instagram >" color="#d15188" width="10vw" onClick={()=>setColor("#d15188")}/>
                <Button title="Go to Twitter >" color="#5ba0d3" width="10vw" onClick={() => setSocialMedia("Twitter")}/>
                <Button title="Go to Tik Tok >" color="black" width="10vw" onClick={() => setLogo("../../../public/twitter-logo.png")}/>  

            </div>
        </div>
    )
}

export default UseStatehome