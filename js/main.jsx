import React from "react";
import DOM from "react-dom";
import Navbar from "./containers/navbar.jsx";
import MainPhoto from "./containers/mainphoto.jsx";
import About from "./containers/about.jsx";
import Knowledge from "./containers/knowledge.jsx";
import Portfolio from "./containers/portfolio.jsx";
import Footer from "./containers/footer.jsx";
import Up from "./containers/up.jsx";
import contacts from "./contacts.js";
import projects from "./projects.js";
import techs from "./techs.js";

let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];
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

DOM.render([
    <Navbar topics={topics}/>,
    <MainPhoto src={mainSrc} alt={mainAlt}/>,
    <About src={secondMainSrc} alt={secondMainAlt} desc={description}/>,
    <Knowledge technology={techs} />,
    <Portfolio projects={projects} />,
    <Footer contacts={contacts} />,
    <Up src={"images/up.png"} alt={"up-button"}/>
], document.getElementById("root"));