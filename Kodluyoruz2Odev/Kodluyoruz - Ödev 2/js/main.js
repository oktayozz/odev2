function add() {
    var input = document.getElementById("task").value
    if (input == "" || input == " ") {
        document.getElementById("alert").style.display = ""
        document.getElementById("alertinnerhtml").innerHTML = "Listeye boş ekleme yapamazsınız!"
        document.getElementById("alert").classList.remove("alert-succes", "alert-warning")
        document.getElementById("alert").classList.add("alert-danger")
    }
    else {
        document.getElementById("alertinnerhtml").innerHTML = "Listeye eklendi"
        document.getElementById("alert").classList.remove("alert-danger", "alert-warning")
        document.getElementById("alert").classList.add("alert-success")
        document.getElementById("alert").style.display = ""
        var ul = document.getElementById("list")
        var li = document.createElement('li');
        var button = document.createElement('button');
        ul.appendChild(li);
        li.innerHTML = input;
        li.appendChild(button)
        li.onclick = function () {
            this.parentElement.removeChild(this);
            document.getElementById("alert").style.display = ""
            document.getElementById("alertinnerhtml").innerHTML = "Listeden silindi"
            document.getElementById("alert").classList.remove("alert-danger", "alert-success")
            document.getElementById("alert").classList.add("alert-warning")
        };
        button.style = "float: right"
        button.type = "button"
        button.className = "btn-close"
    }
}
function closealert() {
    document.getElementById("alert").style.display = "none"
}