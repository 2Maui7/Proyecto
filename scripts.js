document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset(); // Limpia el formulario
  });
  