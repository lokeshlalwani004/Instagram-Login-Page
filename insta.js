
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Basic validation
    if (username === "" || password === "") {
      alert("Please enter username and password.");
      return;
    }
    window.location.href ="https://www.instagram.com/__lokesh_lalwani__/?next=%2F";
  };
