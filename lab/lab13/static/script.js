function handle_click() {
    stuff = document.getElementById("grade").value
    if (stuff.length != 3) {
        alert("Course ID " + stuff + " is Invalid, it can only be 3 digits")
    }
}