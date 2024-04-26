function mostrarImagen() {
    document.getElementById('mensaje').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('mensaje').classList.add('oculto');
        document.getElementById('imagen').classList.remove('oculto');
        document.getElementById('imagen').classList.add('fade-in', 'active');
        document.getElementById('frase').classList.remove('hidden');
        
        // Reproducir la canción
        var audio = document.querySelector('audio');
        audio.play();
    }, 2000);
}