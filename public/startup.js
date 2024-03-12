var registeredUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

function changeText() {
    var header = document.querySelector('h4');
    var button = document.getElementById('Prompt options');

    if (header.textContent.trim() === "The prompt for the day will go here (Database Data)") {
        header.textContent = "Free Write";
        button.textContent = "Switch to Prompt";
    } else {
        header.textContent = "The prompt for the day will go here (Database Data)";
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

  
  // Modify the submitWrite function to send user text to the server
  function submitWrite() {
    var userText = document.getElementById('userText').value.trim();
    if (userText === '') {
      alert('Please enter some text before submitting.');
      return;
    } else {
      var confirmSubmit = confirm('Are you sure you want to submit this text?');
      if (confirmSubmit) {
        // Send the user's text to the server
        fetch('/submission', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: userText }),
        })
        .then(response => {
          if (response.ok) {
            sessionStorage.setItem('submittedText', userText);
            document.getElementById('userText').value = '';
            alert('Your writing has been submitted successfully!');
          } else {
            throw new Error('Failed to submit the text.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while submitting your writing.');
        });
      }
    }
  }
  
async function displayQuote() {
    await fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.querySelector('#quoteContent');
        quoteEl.classList.add('quote');
        const authorEl = document.querySelector('#quoteAuthor');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
        console.log(data.content);
      });
  }

function fetchDataFromDatabase() {
    // Dummy data representing fetched data from the database
    var userData = [
        { user: "User1", prompt: "Prompt 1", date: "2/5/2024" },
        { user: "User1", prompt: "Prompt 2", date: "2/4/2024" },
        { user: "User2", prompt: "Prompt 3", date: "2/5/2024" },
        { user: "User2", prompt: "Prompt 4", date: "2/4/2024" }
    ];

    // Group data by user
    var groupedData = {};
    userData.forEach(function(data) {
        if (!groupedData[data.user]) {
            groupedData[data.user] = [];
        }
        groupedData[data.user].push(data);
    });

    // Create tables for each user
    Object.keys(groupedData).forEach(function(user) {
        var userTable = document.createElement('table');
        userTable.setAttribute('border', '1');
        userTable.setAttribute('width', '500px');

        var userTableHTML = '<tr><th colspan="2"><h4>Prompts related to Submission</h4><h4>' + user + '</h4></th></tr>';

        groupedData[user].forEach(function(data) {
            userTableHTML += '<tr><td colspan="2"><b>' + data.prompt + '</b> - ' + data.date + '</td></tr>';
        });

        userTable.innerHTML = userTableHTML;

        document.getElementById('tablesContainer').appendChild(userTable);
    });
}

