document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('Name').value;
    const rollNumber = document.getElementById('roll-number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('Password').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;
    const user = {
        name,
        rollNumber,
        email,
        password,
        mobile,
        gender,
        course,
        year,
        semester
    };

    localStorage.setItem('user', JSON.stringify(user));
    document.getElementById('popup').style.display = 'block';
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000); 
});

function togglePasswordVisibility() {
    const passwordField = document.getElementById('Password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}
