function validate(show) {
    var em = document.getElementById("email");
    var pw = document.getElementById("pwd");
    if (em.value == "admin" && pw.value == "12345") {
        em.value = "";
        pw.value = "";
        show();
        return true;
    }
    else {
        alert("Incorrect Username or Password!!!!Try Again");
        em.value = "";
        pw.value = "";
        return false;
    }
}
function show(){
    window.location.href = "Home.html";
}