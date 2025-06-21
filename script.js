function checkCredentials(event) {
    event.preventDefault(); // Не отправлять форму

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "tester" && password === "admin123") {
        window.location.href = "pages/really.html"; // замени на нужную страницу
    } else {
        alert("Неверные данные!");
    }
}
