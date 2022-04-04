import react, {useState, useEffect} from "react";
import "./home.css"
import InputField from "../../components/basics/input-field.jsx"
import Button from "../../components/basics/button.jsx"
import Card from "../../components/basics/card"


const UseStatehome = (props) => {
    
    const [color, setColor] = useState("#1877f2")
    const [socialMedia, setSocialMedia] = useState("Facebook")
    const [logo, setLogo] = useState("https://www.aludesign.pl/wp-content/uploads/2021/07/Facebook-Logo.png")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    useEffect(function(){
        if(color == "#d15188"){
            setSocialMedia("Instagram")
            setLogo("data:image/jpeg;base64,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")
        }
        else if(color == "#5ba0d3"){
            setSocialMedia("Twitter")
            setLogo("data:image/png;base64,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")
        }
        else if(color == "black"){
            setSocialMedia("Tik Tok")
            setLogo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0RiFnOr1BtzR_vEBZFtNev6DwV0o-leihw&usqp=CAU")
        }
        
    }, [color])
    
    
    return (
        <div className="all-home">
            <div className="home">
                <div id="left-logo">
                    <img src={logo}  alt="" />
                    <h2>{socialMedia} helps you connect and share with the people in your life.</h2>
                </div>
                <div id="right-login">
                    <Card color="white">
                        <InputField type="email" placeholder="Email address or phone number" value={email} onChange={e => setEmail(e.target.value)}/>
                        <InputField type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <Button title="Log In" color={color} width="100%" />
                        <a href="#">Forgotten password?</a>
                        <hr />
                        <Button title="Create New Account" color="#42b72a" width="fit-content" />
                    </Card>
                    <p><strong>Create a Page</strong> for a celebrity, brand or business</p>
                </div>
            </div>
            <div className="buttons">
                <Button title="Go to Instagram >" color="#d15188" width="10vw" onClick={() => setColor("#d15188")}/>
                <Button title="Go to Twitter >" color="#5ba0d3" width="10vw" onClick={() => setColor("#5ba0d3")}/>
                <Button title="Go to Tik Tok >" color="black" width="10vw" onClick={() => setColor("black")}/>  
            </div>
            <div className="email">
                <span>Email: </span>
                <span className="data" style={{color: color}}>{email}</span>
            </div>
            <div className="password">
                <span>{socialMedia} doesn't know your password is: </span>
                <span className="data" style={{color: color}}>{password}</span>
            </div>
        </div>
    )
}

export default UseStatehome