var parentDiv = document.getElementById("header");
parentDiv.style.cssText = "display: flex; column-gap: 80px;";


var logoDiv = document.createElement("div");
logoDiv.style.cssText = "width: 220px; ";
parentDiv.append(logoDiv);

var Logo = document.createElement("img");

Logo.src += "C:/xampp/htdocs/wc2022/public/logos/logo.png";

Logo.style.width = "200px";
Logo.style.height = "100px";

logoDiv.append(Logo);


var navBar = document.createElement("div");
navBar.style.cssText = " padding-top: 25px; padding-bottom: 25px; width: 600px";

var teams= document.createElement("a");
teams.href = "index.html";
teams.textContent = "Teams";
navBar.append(teams);
parentDiv.append(navBar);

var players= document.createElement("a");
players.href = "index.html";
players.textContent = "players";
navBar.append(players);
players.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

var today= document.createElement("a");
today.href = "index.html";
today.textContent = "today";
navBar.append(today);
today.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

var fixtures= document.createElement("a");
fixtures.href = "index.html";
fixtures.textContent = "fixtures";
navBar.append(fixtures);
fixtures.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

var results= document.createElement("a");
results.href = "index.html";
results.textContent = "results";
navBar.append(results);
results.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

var standing= document.createElement("a");
standing.href = "index.html";
standing.textContent = "standing";
navBar.append(standing);
standing.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

var admin= document.createElement("a");
admin.href = "index.html";
admin.textContent = "admin";
navBar.append(admin);
admin.style.cssText = "margin-left: 10px"
parentDiv.append(navBar);

document.body.append(parentDiv);



var footer = document.getElementById("footer");
footer.innerText = "copyright 2022 - l00158710@student.atu.ie"
footer.style.cssText = "text-align: center;";
document.body.append(footer);
