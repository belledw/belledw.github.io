let catPara = document.getElementById("cat-fact")

fetch("https://meowfacts.herokuapp.com/")
.then(res => res.json())
.then(data => {
        catPara.innerHTML = data.data;
    })

let majorSection = document.getElementsByClassName("major-section")

function openCloseNav() {
    if (document.getElementById("sidenav").style.width == "225px") {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("body").style.marginRight = "0";
        for (i = 0; i < majorSection.length; i++) {
            majorSection[i].style.width = "91vw";
        }
    } else {
        document.getElementById("sidenav").style.width = "225px";
        document.getElementById("body").style.marginRight = "225px";
        for (i = 0; i < majorSection.length; i++) {
            majorSection[i].style.width = "80vw";
        }
    }
}

// Reference https://www.w3schools.com/howto/howto_js_slideshow.asp 
let slideIndex = 1;
function slideshow(n) {
    let i;
    let slides = document.getElementsByClassName("project-main");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].id = "off-display";
    }
    slides[slideIndex-1].id = "on-display";
    slides[slideIndex-1].style.display = "flex";
    for (i = 0; i != slideIndex-1 && i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].id = "off-display";
    }
}

// Reference https://www.webapis.info/examples/web-animations/animate-remove
async function changeSlide(n) {
    let display = document.getElementById("on-display");
    await display.animate([
        {opacity: 1},
        {opacity: 0}
    ], {duration: 150}).finished;
    slideshow(slideIndex += n);
}

// Typing effect reference https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'computer science + cybersecurity student'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("student-desc").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

/* Cat fact API

MIT License

Copyright (c) 2019 whiterabbit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/