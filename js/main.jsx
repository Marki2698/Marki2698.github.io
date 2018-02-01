import React from "react";
import DOM from "react-dom";
import Navbar from "./containers/navbar.jsx";
import MainPhoto from "./containers/mainphoto.jsx";
import About from "./containers/about.jsx";
import Knowledge from "./containers/knowledge.jsx";
import Portfolio from "./containers/portfolio.jsx";
import Footer from "./containers/footer.jsx";
import Up from "./containers/up.jsx";
import Scripts from "./components/scripts.jsx";
import contacts from "./contacts.js";
import projects from "./projects.js";
import techs from "./techs.js";

//let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];

let arrtop = [
    {
        href: "marki2698",
        desc: "Marki2698" 
    },
    {
        href: "about",
        desc: "About me"
    },
    {
        href: "know",
        desc: "What I know"
    },
    {
        href: "made",
        desc: "What I've made"
    },
    {
        href: "contact",
        desc: "Contact with me"
    }
]

let mainSrc = "images/models.jpg";
let mainAlt = "my photo";
let secondMainSrc = "images/models.jpg";
let secondMainAlt = "my photo";
let description = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce fringilla est sit amet nulla cursus, vel feugiat mi iaculis. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
Praesent commodo sapien non tortor imperdiet posuere. 
Cras sollicitudin metus vitae risus sodales iaculis. 
Nam cursus metus eget leo bibendum malesuada. Nulla facilisi. 
In ut nisi et felis scelerisque tincidunt at ac sapien. 
Vivamus tincidunt urna suscipit nulla tempus vehicula. 
Ut interdum in ipsum ut pretium. Morbi eros neque, 
faucibus porta urna vel, gravida tempor augue. 
Proin viverra quis quam et commodo. Nunc non nisi vitae orci pretium suscipit. 
In non gravida ante, ut molestie metus.
Praesent pellentesque enim eu massa feugiat finibus. 
Nam elementum, eros ac viverra ornare, neque ipsum porta leo, 
non iaculis tellus massa id leo. Pellentesque sagittis fermentum neque non dictum. 
Maecenas rutrum ante eget leo tempor commodo. Vestibulum mattis sapien et erat lobortis, 
sit amet mollis mi iaculis. Cras placerat nec magna vitae efficitur. 
Nulla at pretium tellus. Quisque non mi auctor, ultricies dolor ornare, semper enim. 
Praesent sed odio rutrum, porta odio sed, dignissim arcu. 
Vivamus suscipit ex sed nibh egestas, vitae tempor ante vulputate. 
Nulla aliquam massa vel mattis cursus. Pellentesque eu diam rutrum, 
faucibus lacus et, laoreet magna. `;
//alert("done!");

const sources = [
    "node_modules/bootstrap/dist/bootstrap.js",
    "node_modules/tooltip.js/dist/tooltip.js",
    "node_modules/pooper.js/dist/pooper.js",
    "node_modules/jquery/dist/jquery.js"
];


// listener for scrolling
$(document).ready(() => {
    $(document).scroll((e) => {
        if(window.scrollY < 1024) {
            if(document.querySelector(".up-button img").classList.contains("hidden")) return false;
            else document.querySelector(".up-button img").classList.toggle("hidden");
        }
        else {
            if(document.querySelector(".up-button img").classList.contains("hidden")) document.querySelector(".up-button img").classList.toggle("hidden");
            else  return false;
        }
    });
});


DOM.render([
    <Navbar topics={arrtop}/>,
    <MainPhoto id={"marki2698"} src={mainSrc} alt={mainAlt}/>,
    <About id={"about"} desc1={"A little about me"} desc2={description}/>,
    <Knowledge id={"know"} technology={techs} />,
    <Portfolio id={"made"} projects={projects} />,
    <Footer id={"contact"} contacts={contacts} />,
    <Up src={"images/up1.png"} alt={"up-button"}/>/* ,
    <Scripts sources={sources}/> */
], document.getElementById("root"));