document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const chatbotBody = document.getElementById("chatbotBody");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    // Abrir y cerrar el chatbot
    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.classList.toggle("visible");
        chatbotWindow.style.display = chatbotWindow.classList.contains("visible") ? "block" : "none";
    });

    // Manejar la entrada del usuario
    sendButton.addEventListener("click", handleUserInput);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") handleUserInput();
    });

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Agregar mensaje del usuario
        addMessage(userMessage, "user");
        userInput.value = "";

        // Generar respuesta del bot
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, "bot");
    }

    function addMessage(message, type) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", `${type}-message`);

        // Si es un mensaje del bot, agrega avatar
        if (type === "bot") {
            const img = document.createElement("img");
            img.src = "oscarcito.jpg"; // Ruta a la imagen del bot
            img.alt = "Oscar";
            img.classList.add("bot-avatar");
            messageDiv.appendChild(img);
        }

        // Agregar texto del mensaje
        const text = document.createElement("span");
        text.textContent = message;
        messageDiv.appendChild(text);

        // Añadir mensaje al cuerpo del chat
        chatbotBody.appendChild(messageDiv);
        chatbotBody.scrollTop = chatbotBody.scrollHeight; // Desplazar hacia abajo
    }

    function getBotResponse(input) {
        input = input.toLowerCase();

        if (input.includes("denuncia")) {
            return "Para realizar una denuncia online, completa el formulario disponible en nuestra página.";
        } else if (input.includes("prevención")) {
            return "Para prevenir ciberdelitos, utiliza contraseñas seguras, evita enlaces sospechosos y mantén tu sistema actualizado.";
        } else if (input.includes("phishing")) {
            return "El phishing es un intento de obtener datos sensibles simulando ser una entidad confiable. No hagas clic en enlaces sospechosos.";
        } else {
            return "Lo siento, no tengo información sobre eso. Intenta con otra consulta.";
        }
    }
});
