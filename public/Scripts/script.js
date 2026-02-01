function showLinks() {
    let x = document.getElementById("topNavBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let firstTime = true;

function loadDescription(name) {
    let descElem = document.getElementById("desc");

    if (firstTime) {
        console.log("First load from file");

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("desc").innerHTML =
                    this.responseText;
            }
        };
        xhttp.open("GET", "../../../Contents/Descriptions/" + name + ".txt", true);
        xhttp.send();

        firstTime = false;
    } else {
        if (descElem.style.display === "none") {
            descElem.style.display = "block";
            document.getElementById("loadDesc").innerHTML = "Nascondi descrizione";
        } else {
            descElem.style.display = "none";
            document.getElementById("loadDesc").innerHTML = "Visualizza descrizione";
        }
    }
}
