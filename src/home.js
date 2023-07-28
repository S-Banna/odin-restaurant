function exported() {
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let body = document.getElementById("body");
    body.innerHTML = "";
    let title = document.createElement("div");
    title.setAttribute("id", "title");
    title.textContent = "Snack Abou Joseph";
    body.appendChild(title);
    let split = document.createElement("div");
    split.setAttribute("id", "split");
    body.appendChild(split);
    let review = document.createElement("div");
    review.setAttribute("id", 'review');
    let reviewText = document.createElement("div");
    reviewText.textContent = "If you're craving a taste of authentic Middle Eastern flavors with a touch of homemade charm, Snack Abou Joseph is the hidden gem you've been searching for. Nestled away on a quaint side street, this cozy restaurant offers a delightful dining experience that leaves a lasting impression."
    review.appendChild(reviewText);
    split.appendChild(review);
    review.appendChild(br);
    let reviewer = document.createElement("div");
    reviewer.textContent = "- Some Dude";
    reviewer.style.fontWeight = "600";
    review.appendChild(reviewer);
    let hours = document.createElement("div");
    hours.setAttribute("id", "hours");
    split.appendChild(hours);
    let hoursText = document.createElement("div");
    hoursText.textContent = "Hours";
    hoursText.style.fontSize = "20px";
    hoursText.style.fontWeight = "600";
    hours.appendChild(hoursText);
    hours.appendChild(br2);
    let hoursMF = document.createElement("div");
    let hoursSS = document.createElement("div");
    hoursMF.textContent = "Monday - Friday: 12-9pm";
    hoursSS.textContent = "Saturday - Sunday: 9am - 9pm";
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
    locationA.textContent = "Ain Dara, Main Road";
    location.appendChild(br3);
    location.appendChild(locationA);
}

export { exported };