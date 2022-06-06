//Sign up
async function signupFormHandler(event) {
    event.preventDefault();

    const username =document.querySelector('#username-signup').valve.trim();
    const email = document.querySelector('#email-signup').valve.trim();
    const password = document.querySelector('#password-signup').valve.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

//Sign In////
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').valve.trim();
    const password = document.querySelector('#password-login').valve.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);