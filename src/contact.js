function exported3() {
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let body = document.getElementById("body");
    body.innerHTML = "";
    let title = document.createElement("div");
    title.setAttribute("id", "title");
    title.textContent = "Contact Us Here!";
    body.appendChild(title);
    let split = document.createElement("div");
    split.setAttribute("id", "split");
    body.appendChild(split);
    let hours = document.createElement("div");
    hours.setAttribute("id", "hours");
    split.appendChild(hours);
    let hoursText = document.createElement("div");
    hoursText.textContent = "Info:";
    hoursText.style.fontSize = "20px";
    hoursText.style.fontWeight = "600";
    hours.appendChild(hoursText);
    hours.appendChild(br2);
    let hoursMF = document.createElement("div");
    let hoursSS = document.createElement("div");
    hoursMF.textContent = "Email: placeholder@gmail.com";
    hoursSS.textContent = "Phone: +961 77 777 777";
    hours.appendChild(hoursMF);
    hours.appendChild(hoursSS);
    let location = document.createElement("div");
    location.setAttribute("id", "location")
    let locationFinal = document.createElement("div");
    locationFinal.style.fontSize = "20px";
    locationFinal.style.fontWeight = "600";
    locationFinal.textContent = "Location:"
    location.appendChild(locationFinal);
    split.appendChild(location);
    let locationA = document.createElement("div");
    locationA.textContent = "Find us on maps: https://goo.gl/maps/xV3CwN9j1ydqSR5w7";
    location.appendChild(br3);
    location.appendChild(locationA);
}

export { exported3 };