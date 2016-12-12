function login() {
    var id = document.getElementsById("id").value;
    var pw = document.getElementsById("pw").value;
    alert(id+" "+pw);
    if (id == "mahasiswa" && pw=="abcd") {
        window.location="mhs-jadwalsidang.html";
    } else
    if (id=="dosen" && pw=="efgh") {
        window.location =  "dsn-isi-constraints.html";
    } else
    if (id=="tuif" && pw=="ijkl") {
        window.location = "tu-calendar.html";
    } else {
        alert("Wrong ID or password.");
    }
}