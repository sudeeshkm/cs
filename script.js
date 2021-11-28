var count = 0;
let today = new Date().toISOString().slice(0, 10);
document.getElementById("today").innerHTML=today;
var t = new Date();
var time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
document.getElementById("now").innerHTML="Time:"+time;



//Navbar

document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});


function addlist() {
    var xhttp = new XMLHttpRequest();
    var d = document.getElementById("demo");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var op = "";
            for (let i = 0; i < response.length; i++) {
                if(response[i].completed!=true)
                op += "<div class='d-flex align-items-center'><label><input type='checkbox' class='option-input radio' id='cb' onclick='todo(this)'><span class='label-text' id='t'>" + response[i].title + "</span></label></div><br>";
                else
                op += "<div class='d-flex align-items-center'><label><font color='red'><input type='checkbox' class='option-input radio' id='cb' onclick='todo(this)' checked disabled><span class='label-text'  id='t'>" + response[i].title + "</span></label></font></div><br>";
            }
            //console.log(op);
            d.innerHTML = op;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


function todo(cb) {
    
    if (cb.checked == true) {
        count++;
       cb.parentNode.style.color="red";
        if (count == 5) {
            alert("Congrats!.5 Tasks have been Successfully Completed.");
        }
    }
    else{
        count--;
        cb.parentNode.style.color="black";
        if (count == 5) {
            alert("Congrats!!!You have Successfully Completed 5 Tasks");
    }
}
}