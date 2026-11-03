//I lowkey had to google this because I didn't really understand it at first
var loginform = document.getElementById('loginform');

if (loginform) {
    loginform.addEventListener('submit', function(event) {
        var username = document.getElementById('username').value;
        localStorage.setItem('userSubmission', username);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    var displayNameSpan = document.getElementById('displayName');
    if (displayNameSpan) {
        var savedName = localStorage.getItem('userSubmission');
        if (savedName) {
            displayNameSpan.textContent = savedName;
        }
    }
});