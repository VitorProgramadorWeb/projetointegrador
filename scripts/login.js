const form = document.querySelector("#form");

function authenticate() {
    let formData = new FormData(form);

    fetch("/projetointegrador/actions/login.php", {
        method: "post",
        body: formData
    }).then(response => response.json())
    .then(data => {

        if (data.auth) {
            window.location.href = "/projetointegrador/home.php";
        }

        // Message
        let spanMessage = document.querySelector("#message");
        spanMessage.innerHTML = data.message;
        if (data.message != "") {
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    authenticate();
});

/**
 * Toggle password visibility by a button inner a div with the password input
 * @param {HTMLButtonElement} button - toggle button
 */
function togglePasswordVisibility(button) {
    let input = button.parentElement.getElementsByTagName('input')[0];
    
    if (input.type === 'password') {
        input.type = 'text'; button.innerText = 'Ocultar'
    } else {
        input.type = 'password'; button.innerText = 'Mostrar'
    }
}