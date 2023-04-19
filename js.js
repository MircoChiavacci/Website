function toggleDiv() {

    var div = document.getElementById("sidebar-left");
    div.classList.toggle("show");
    if (div.classList.contains("show")) {
        div.focus();

    }
}