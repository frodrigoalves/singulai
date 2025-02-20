function enterWallet() {
    const wallet = document.getElementById('wallet').value;
    if (!wallet) {
        alert("Digite sua carteira!");
        return;
    }
    localStorage.setItem("wallet", wallet);
    window.location.href = "messages.html";
}
