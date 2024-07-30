console.log('index.js is loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const app = document.getElementById('app');
    if (app) {
        app.innerText = 'Bem-vindo à Homepage!';
    } else {
        console.error('Element with id "app" not found');
    }
});

console.log('index.js is loaded');

document.getElementById('app').innerText = 'Bem-vindo à Homepage!';
import '../templates/css/estilo.css';
import '../templates/css/responsivel.css';
