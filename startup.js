var registeredUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

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

function register(username, password) {
  registeredUsers.push({ username:username, password:password })
}
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check if username and password are valid against registered users
  var isValidUser = registeredUsers.some(function(user) {
      return user.username === username && user.password === password;
  });

  if (isValidUser) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'home.html'; // Redirect to home page
  } else {
      // Prompt user to register if not found
      var registerNew = confirm('Username and password not found. Do you want to register?');
      if (registerNew) {
          // You can implement the registration logic here
          alert('You have been registered with username: ' + username + ' and password: ' + password);
          register(username, password)
          login()
      } else {
          alert('Please Enter a Valid Username and Password');
      }
  }
}

function submitWrite() {
  var userText = document.getElementById('userText').value.trim();
  if (userText === '') {
      alert('Please enter some text before submitting.');
      return;
  } else {
      var confirmSubmit = confirm('Are you sure you want to submit this text?');
      if (confirmSubmit) {
          sessionStorage.setItem('submittedText', userText);
          document.getElementById('userText').value = '';
          alert('Your writing has been submitted successfully!');
      }
  }
}

