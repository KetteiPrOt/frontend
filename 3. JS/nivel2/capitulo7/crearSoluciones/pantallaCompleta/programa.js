let url = document.getElementById('url'),
    protocolo = document.getElementById('protocolo'),
    host = document.getElementById('host'),
    puerto = document.getElementById('puerto');

url.textContent = window.location.href;
protocolo.textContent = window.location.protocol;
host.textContent = window.location.hostname;
puerto.textContent = window.location.port;