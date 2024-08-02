document.getElementById('magicButton').addEventListener('click', function() {
    alert('Привет! Спасибо, что нажали кнопку.');
    this.style.backgroundColor = this.style.backgroundColor === 'green' ? '#0073e6' : 'green';
});