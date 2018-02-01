import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";

//technology will be array of objects [{src: "", alt: "", desc: ""}]

function getPopper(ref, pop) {
    return new Popper(ref, pop, {
        placement: "top",
        onCreate(data) {
            console.log(data);
        },
        modifiers: {
            flip: {
                behaviour: ["left", "right", "top", "bottom"]
            },
            offset: {
                enabled: true,
                offset: "0,-115"
            }
        }
    });
}

class Knowledge extends React.Component {
    constructor(props) {
        super(props);
        this.technology = this.props.technology;
        this.id = this.props.id;
    }
    
    ShowDesc(e) {
        return function(e) {
            if(e.target.tagName.toLowerCase() === "img") {
                let ref = e.target;
                let pop = e.target.nextElementSibling;
                let popper = getPopper(ref, pop);
                pop.classList.toggle("hidden");
            } else if(e.target.tagName.toLowerCase() === "p") {
                e.preventDefault();
                e.target.classList.toggle("hidden");
            }
        }
    }

    render() {
        return(
            <section id={this.id} className="knowledge">
                    {
                        this.technology.map((val, i) => 
                            <div key={i} className="technology" >
                                <Image listener={(e) => this.ShowDesc(e)} src={val.src} alt={val.alt}/>
                                <Description listener={(e) => this.ShowDesc(e)} classname={"hidden"} desc={val.desc}/>
                            </div>
                        )
                    }
            </section>
        );
    }
}

Knowledge.propTypes = {
    technology: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string
};

export default Knowledge;