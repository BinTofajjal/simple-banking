document.getElementById('sign-in').addEventListener('click', function () {
    // Get User Email.
    const mail = document.getElementById('email');
    const userEmail= mail.value;
    // Get User Password.
    const pass = document.getElementById('password');
    const userPass = pass.value;

    // Setup Username or Email and Password for login.
    if (userEmail == '' && userPass == '') {
        alert('Please insert a valid ID and Password')
    } else if (userEmail == 'ab@cd.com' && userPass == '123') {
        window.location.href = '/dashboard.html'
    } else {
        alert('User Email or Password is invalid')
    }
})