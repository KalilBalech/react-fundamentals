import react from "react";
import "./content.css"
import { Routes, Route } from "react-router-dom"
import Home from "../../views/examples/home"
import About from "../../views/examples/about"

const content = (props) => {
    return (
        <main className="content">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    )
}

export default content