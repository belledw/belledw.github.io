let catPara = document.getElementById("cat-fact")

fetch("https://meowfacts.herokuapp.com/")
.then(res => res.json())
.then(data => {
        catPara.innerHTML = data.data;
    })

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("body").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("body").style.marginRight = "0";
}

function openCloseNav() {
    if (document.getElementById("sidenav").style.width == "250px") {
        closeNav()
    } else {
        openNav()
    }
}