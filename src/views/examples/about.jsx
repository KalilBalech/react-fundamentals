import react from "react";
import "./about.css"
import Button from "../../components/basics/button"

const about = (props) => {
    return (
        <div className="about">

            <div id="vid">
                <video autoplay="autoplay" loop="loop" muted >
                    <source src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t66.36240-6/122507334_1092306881620008_2410799280813658918_n.mp4?_nc_cat=104&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjI5MzEsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=SUcuOwf3Vw0AX_WF3uF&rl=2931&vabr=1954&_nc_ht=scontent.fsjk1-1.fna&oh=00_AT9LXSGugaPJ25asVoVvu9FU0CcxMb9vc5XeFqXFIjxG6w&oe=624DD05B" type="video/mp4" />
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