import React from "react";
import PropTypes, { object } from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";
import Anchor from "../components/anchor.jsx";

// projects = [{src: "src", alt:"alt", href:"href", label:"label", desc:"desc"}]

const Portfolio = ({projects}) => <section className="portfolio">
    {
        projects.map((val, i) => {
            <div key={i} className="project">
                <Image key={i} src={val.src} alt={val.alt} />
                <Anchor key={i} href={val.href} label={val.label} />
                <Description key={i} desc={val.desc} />
            </div>
        })
    }
</section>;

Portfolio.propTypes = {
    projects: PropTypes.array
};

Portfolio.defaultProps = {
    projects: [
        {src: "src", alt:"alt", href:"href", label:"label", desc:"desc"},
        {src: "src", alt:"alt", href:"href", label:"label", desc:"desc"},
        {src: "src", alt:"alt", href:"href", label:"label", desc:"desc"}
    ]
};

export default Portfolio;