function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }

  function changeText() {
    var header = document.querySelector('h4');
    var button = document.getElementById('Prompt options');

    if (header.textContent.trim() === "The prompt for the day will go here (third party call to writing prompts)") {
        header.textContent = "Free Write";
        button.textContent = "Switch to Prompt";
    } else {
        header.textContent = "The prompt for the day will go here (third party call to writing prompts)";
        button.textContent = "Switch to Free Write";
    }
}
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  //Need to check user validity against the database here
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('loggedIn', 'true');
  window.location.href = 'home.html';
}