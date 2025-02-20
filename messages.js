document.addEventListener("DOMContentLoaded", async () => {
    const wallet = localStorage.getItem("wallet");
    if (!wallet) {
        alert("Nenhuma carteira encontrada!");
        window.location.href = "index.html";
        return;
    }

    // Obter mensagens
    const response = await fetch(`http://localhost:5000/messages/${wallet}`);
    const messages = await response.json();

    const messageList = document.getElementById("message-list");
    messages.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = `${msg.sender}: ${msg.content}`;
        messageList.appendChild(li);
    });
});

async function sendMessage() {
    const receiver = document.getElementById("receiver").value;
    const message = document.getElementById("message").value;
    const sender = localStorage.getItem("wallet");

    if (!receiver || !message) {
        alert("Preencha todos os campos!");
        return;
    }

    const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender, receiver, content: message })
    });

    const result = await response.json();
    alert(result.message);
}
