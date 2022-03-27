import react from "react";
import Menu from "../components/layout/menu"
import Content from "../components/layout/content"
import "./app.css"
import { BrowserRouter as Router } from "react-router-dom";


const App = props => {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Content />
            </div>
        </Router>
    )
}

export default App