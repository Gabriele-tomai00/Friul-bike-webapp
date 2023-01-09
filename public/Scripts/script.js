function showLinks() {
    let x = document.getElementById("topNavBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function loadDescription(name) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("desc").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "../../../Contents/Descriptions/" + name + ".txt", true);
    xhttp.send();
}
