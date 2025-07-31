// js/chatbot.js

document.addEventListener('DOMContentLoaded', () => {
    const openChatbotBtn = document.getElementById('open-chatbot');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const minimizeChatbotBtn = document.getElementById('minimize-chatbot');
    const messagesContainer = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const sendMessageBtn = document.getElementById('send-message');

    const toggleChatbot = () => {
        chatbotContainer.classList.toggle('active');
    };

    openChatbotBtn.addEventListener('click', toggleChatbot);
    minimizeChatbotBtn.addEventListener('click', toggleChatbot);

    const addMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender); // 'user' or 'bot'
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        messageDiv.appendChild(paragraph);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const getBotResponse = (userInput) => {
        userInput = userInput.toLowerCase().trim();
        let botReply = "Maaf, saya belum mengerti pertanyaan itu. Coba tanyakan tentang 'cyber security', 'pemrograman', atau 'jaringan'.";

        if (userInput.includes('halo') || userInput.includes('hai')) {
            botReply = "Halo juga! Ada yang bisa saya bantu seputar dunia IT?";
        } else if (userInput.includes('terima kasih')) {
            botReply = "Sama-sama! Senang bisa membantu.";
        } else if (userInput.includes('cyber security') || userInput.includes('keamanan')) {
            botReply = "Cyber security adalah praktik melindungi sistem, jaringan, dan program dari serangan digital. Topik spesifik apa yang Anda minati? Ethical hacking, keamanan jaringan?";
        } else if (userInput.includes('pemrograman') || userInput.includes('coding')) {
            botReply = "Pemrograman adalah proses menulis instruksi untuk komputer. Isaki menguasai Python, JavaScript, dan HTML/CSS. Anda ingin tahu lebih banyak tentang salah satunya?";
        } else if (userInput.includes('jaringan')) {
            botReply = "Jaringan komputer adalah kumpulan perangkat yang terhubung untuk berbagi sumber daya. Isaki ahli dalam administrasi jaringan, konfigurasi router, dan server Linux.";
        } else if (userInput.includes('proyek')) {
            botReply = "Isaki telah membuat beberapa proyek seperti Security Scanner Tool dengan Python dan Sistem Monitoring Jaringan. Anda bisa melihatnya di bagian Proyek.";
        } else if (userInput.includes('siapa kamu')) {
            botReply = "Saya adalah AI Assistant yang diprogram untuk menjawab pertanyaan seputar portofolio Muhammad Isaki Prananda, khususnya di bidang TJKT dan Cyber Security.";
        }

        return botReply;
    };

    const handleSendMessage = () => {
        const userInput = chatbotInput.value;
        if (userInput.trim() === '') return;

        addMessage(userInput, 'user');
        chatbotInput.value = '';

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000 + Math.random() * 500);
    };

    sendMessageBtn.addEventListener('click', handleSendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
});