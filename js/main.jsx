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

let mainSrc = "images/me.jpg";
let mainAlt = "my photo";
let secondMainSrc = "images/models.jpg";
let secondMainAlt = "my photo";
let description = `Hi, I'm Markiian Lukashiv! I'm hungry student from Lviv, Ukraine.
As like I said I'm student if precisely from Lviv Polythecnic National University, managment of cybersecurity department.
When I studied at school I went to martial arts section for six years. It was unforgettable experience =).
So I'm fit. I also like reading books. My favourite books are : "Ready Player One" by Ernest Klein,
"The Witcher" series by Andzej Sapkowski, Harry Hole series by Jo Nesbo, "Захар Беркут" by Ivan Franko and "Тигролови" by Ivan Bahriany.
I like going to the cinema so much. I have a lot of favourite movies.
My passion is JavaScript. But I also know and like to work with HTML and CSS.
Perfectly I want to become Full-stack developer. Why? Because I like Node.js and MongoDB as well.
I'm young and don't know everything, but I want to know, so don't be so critical when you will be reading my code.
I've opened React.js for me. And it's awesome and on my opinion it's more friendly than 
Angular 4, maybe because I don't know TypeScript (maybe some day).
As you see this page hosted on GitHub using Git pages, so I know Git on basic level.
I have a great way ahead called Full-stack developer.`;


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