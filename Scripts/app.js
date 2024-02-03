//Authors:
//Justis McGill - 100761809
//Jennifer Murphy - 100
//Date:
//Feb 2, 2024

//Get POST data
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
}),
headers: {
    "Content-type": "application/json; charset=UTF-8"
}})

//

//Change products text to projects
let products = document.getElementById("Products");
products.innerHTML = '<i class="fa fa-th"></i> Projects';

//Get the navbar element
var navLinks = document.getElementById("navLinks");

//Create the new list item, link, and icon elemnts
const newListItem = document.createElement("li");
const newLink = document.createElement("a");
const newFAIcon = document.createElement("i");

//Running Code
//****************************************************
//run initialization(INI) functions to set element attributes
FAIconINI();
ListItemINI();
LinkINI();

ShowPageContent();

if(document.getElementById("contact") != null)
{
    $(document).ready( function(){
        $("#submit").click(function() { OnSubmit(); });
    });
}


//Functions
//****************************************************
//Submit button function for contact.hmtl
function OnSubmit()
{
    console.log($(".name").value + ", " + $(".phone").value + ", " + $(".email").value + ", " + $(".msg").value);
    setTimeout(Submit, 3000);
}

function Submit()
{
    //console.log("Submit");
    location.href = "./index.html";
}

//Shows the page content depending on the html id
function ShowPageContent()
{
    if(document.getElementById("index") != null)
    {
        HomePageContent();
    }
    if(document.getElementById("products") != null)
    {
        ProductsPageContent();
    }
    if(document.getElementById("services") != null)
    {
        ServicesPageContent();
    }
    if(document.getElementById("about") != null)
    {
        AboutPageContent();
    }
}

//Displays the home page content
//Change background image
//Body text welcomes users
function HomePageContent()
{
    //Get and Create Elements
    var pageBody = document.getElementsByTagName("body");
    var bodyDiv = document.createElement("div");
    var header = document.createElement("h1");
    var content = document.createElement("p");

    //Set Element Attributes
    pageBody[0].setAttribute("style", "background-repeat: no-repeat; background-size: cover; background-image: url('./Images/Background.webp');");
    bodyDiv.setAttribute("class", "text-center");
    header.innerHTML = "Manifique Travel Services";
    content.innerHTML = "Welcome to Manifique Travel Services.";

    //Set Element Hierarchy
    pageBody[0].appendChild(bodyDiv);
    bodyDiv.appendChild(header);
    bodyDiv.appendChild(content);
}

//Displays the products page content
function ProductsPageContent()
{
    //get and create elements
    var pageBody = document.getElementsByTagName("body");
    var bodyDiv = document.createElement("div");
    var pageHeader = document.createElement("h1");
    //projcet 1
    var product1Div = document.createElement("div");
    var product1Header = document.createElement("h3");
    var product1Content = document.createElement("p");
    var product1Image = document.createElement("img");
    //project 2
    var product2Div = document.createElement("div");
    var product2Header = document.createElement("h3");
    var product2Content = document.createElement("p");
    var product2Image = document.createElement("img");
    //project 3
    var product3Div = document.createElement("div");
    var product3Header = document.createElement("h3");
    var product3Content = document.createElement("p");
    var product3Image = document.createElement("img");

    //Set Element Attributes
    pageHeader.innerHTML = "Our Projects";
    bodyDiv.setAttribute("class", "text-center");
    //project 1
    product1Header.innerHTML = "Project 1";
    product1Image.setAttribute("src", "./Images/projImg1.png");
    product1Image.setAttribute("alt", "Prsto Card Program");
    product1Content.innerHTML = "Programming a presto card app that will allow you to create a presto card, manage it's balances and delete a presto card.";
    //project 2
    product2Header.innerHTML = "Project 2";
    product2Image.setAttribute("src", "./Images/projImg2.png");
    product2Image.setAttribute("alt", "Bilingual Program Launcher");
    product2Content.innerHTML = "Programming an app that gives a language selection menu when opening a program.";
    //project 3
    product3Header.innerHTML = "Project 3";
    product3Image.setAttribute("src", "./Images/projImg3.png");
    product3Image.setAttribute("alt", "Teperature Converter");
    product3Content.innerHTML = "Programming an app that will convert temperatures too and from Celcius and Fahrenheit";

    //Set Element Heirarchy
    //page header and content
    pageBody[0].appendChild(bodyDiv);
    bodyDiv.appendChild(pageHeader);
    //project 1 content
    bodyDiv.appendChild(product1Div)
    product1Div.appendChild(product1Header);
    product1Div.appendChild(product1Image);
    product1Div.appendChild(product1Content);
    //project 2 content
    bodyDiv.appendChild(product2Div);
    product2Div.appendChild(product2Header);
    product2Div.appendChild(product2Image);
    product2Div.appendChild(product2Content);
    //project 3 content
    bodyDiv.appendChild(product3Div);
    product3Div.appendChild(product3Header);
    product3Div.appendChild(product3Image);
    product3Div.appendChild(product3Content);
}

//Displays the services page content
function ServicesPageContent()
{
    //get and create elements
    var pageBody = document.getElementsByTagName("body");
    var bodyDiv = document.createElement("div");
    var pageHeader = document.createElement("h1")
    //Justis
    var justisDiv = document.createElement("div");
    var justisHeader = document.createElement("h3");
    var justisContent = document.createElement("p");
    //project 2
    var jenniferDiv = document.createElement("div");
    var jenniferHeader = document.createElement("h3");
    var jenniferContent = document.createElement("p");

    //Set Element Attributes
    bodyDiv.setAttribute("class", "text-center");
    pageHeader.innerHTML = "Our Skills";
    //project 1
    justisHeader.innerHTML = "Justis";
    justisContent.innerHTML = "Lots of programming experience, Dependable, Great Customer Service Skills";
    //project 2
    jenniferHeader.innerHTML = "Jennifer";
    jenniferContent.innerHTML = "Great Organization Skills, Freindly, Great Problem Solving skills, Great Customer Service Skills";

    //Set Element Heirarchy
    //page header and content
    pageBody[0].appendChild(pageHeader);
    pageBody[0].appendChild(bodyDiv);
    //Justis content
    bodyDiv.appendChild(justisDiv);
    justisDiv.appendChild(justisHeader);
    justisDiv.appendChild(justisContent);
    //Jennifer content
    bodyDiv.appendChild(jenniferDiv);
    jenniferDiv.appendChild(jenniferHeader);
    jenniferDiv.appendChild(jenniferContent);
}

//Displays the about page content
function AboutPageContent()
{
    //get and create elements
    var pageBody = document.getElementsByTagName("body");
    var bodyDiv = document.createElement("div");
    var pageHeader = document.createElement("h1")
    //Justis Details
    var justisDiv = document.createElement("div");
    var justisHeader = document.createElement("h3");
    var justisContent = document.createElement("p");
    var justisResume = document.createElement("a");
    //jennifer Details
    var jenniferDiv = document.createElement("div");
    var jenniferHeader = document.createElement("h3");
    var jenniferContent = document.createElement("p");
    var jenniferResume = document.createElement("a");

    //Set Element Attributes
    bodyDiv.setAttribute("class", "text-center");
    pageHeader.innerHTML = "About US";
    //project 1
    justisHeader.innerHTML = "Justis";
    justisContent.innerHTML = "I love computers and have been playing around with them since I was a kid.";
    justisResume.innerHTML = "Justis' Resume";
    justisResume.setAttribute("href", "./Documents/JustisResume.pdf");
    //project 2
    jenniferHeader.innerHTML = "Jennifer";
    jenniferContent.innerHTML = "I like doing art, I like cheffin' it up in the kitchen.";
    jenniferResume.innerHTML = "Jennifers Resume";
    jenniferResume.setAttribute("href", "./Documents/JenniferResume.pdf");

    //Set Element Heirarchy
    //page header and content
    pageBody[0].appendChild(bodyDiv);
    bodyDiv.appendChild(pageHeader);
    //Justis content
    bodyDiv.appendChild(justisDiv);
    justisDiv.appendChild(justisHeader);
    justisDiv.appendChild(justisContent);
    justisDiv.appendChild(justisResume);
    //Jennifer content
    bodyDiv.appendChild(jenniferDiv);
    jenniferDiv.appendChild(jenniferHeader);
    jenniferDiv.appendChild(jenniferContent);
    jenniferDiv.appendChild(jenniferResume);
}

//Creates the list item and sets it's attributes
function ListItemINI()
{
    //console.log("ListItemChange");
    newListItem.setAttribute("class", "nav-item");
    navLinks.insertBefore(newListItem, navLinks.children[4]);
}

//creates the Icon(i) element and sets it's attributes
function FAIconINI()
{
    //console.log("IconChange");
    newFAIcon.setAttribute("class", "fa fa-user");
    newLink.appendChild(newFAIcon);
}

//creates the link(a) element and sets it's attributes
function LinkINI()
{
    //console.log("LinkChange");
    newLink.setAttribute("class", "nav-link");
    newLink.setAttribute("href", "./index.html");
    newLink.innerHTML += " Human Resources";
    newListItem.appendChild(newLink);
}