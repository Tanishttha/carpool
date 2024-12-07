document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    if (storedUser) {
        
        if (email === storedUser.email && password === storedUser.password) {
        window.location.href = 'dashboard.html';
        } else {
        
            document.getElementById('error-message').textContent = 'Invalid email or password. Please try again.';
        }
    } else {
        
        document.getElementById('error-message').textContent = 'No registered user found. Please register first.';
    }
});



