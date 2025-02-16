let counter = 0;
document.addEventListener('contextmenu', event => event.preventDefault());

document.getElementById("submitus").onclick = function(login) {
    let username = document.getElementById("username").value;
    console.log(username);
    if ((username === "") || (username === " ")) {
        window.alert("You must enter a valid name in order to login !")
    } else {
        counter++;
        if (counter%2 != 0){
        document.getElementById("submitus").textContent = "Log out";
        document.getElementById("online").textContent = "You are currently logged as : ";
        document.getElementById("usernameshow").textContent = username;
    } else if (counter%2 === 0) {
        document.getElementById("submitus").textContent = "Login";
        document.getElementById("online").textContent = "You logged out.";
        document.getElementById("usernameshow").textContent = " ";
    }
}
}

document.querySelector('#username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log("Key pressed");
        document.getElementById("submitus").click();
    }
});