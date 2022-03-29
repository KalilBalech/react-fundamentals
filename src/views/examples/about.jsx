import react from "react";
import "./about.css"

const about = (props) => {
    return (
        <div className="about">

            <div id="vid">
                <video autoplay="autoplay" loop="loop" muted >
                    <source src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t66.36240-6/122507334_1092306881620008_2410799280813658918_n.mp4?_nc_cat=104&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjI5MzEsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=_ivcv8QqL4MAX91ppxQ&rl=2931&vabr=1954&_nc_ht=scontent.fsjk1-1.fna&oh=00_AT9asEJ1pfgrY5ysCRRNCDHWSxhyZE4rnlXodnhNN5ucLA&oe=6247E19B" type="video/mp4" />
                </video>
                <div className="caption">
                    <h1>We are Meta</h1>
                    <h2>Connection is evolving <br /> and so are we.</h2>
                </div>
            </div>
        </div>
    )
}

export default about