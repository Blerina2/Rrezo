// https://www.youtube.com/watch?v=q-Zyc7Lw-_0
const signUpButton = document.getElementById('signUpId');
const signInButton = document.getElementById('signInId');
const containerLogin = document.getElementById('containerLoginId');

signUpButton.addEventListener('click', () => {
    containerLogin.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    containerLogin.classList.remove("right-panel-active");
});
