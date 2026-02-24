document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const phoneNumber = '5511993008123';
    const message = 'Olá! Gostaria de saber mais sobre os serviços do Kadu Ilusionista.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = whatsappUrl;

    whatsappBtn.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'WhatsApp Button'
            });
        }
    });

    // Floating particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const count = window.innerWidth < 600 ? 18 : 35;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.top = (60 + Math.random() * 40) + '%';
            p.style.setProperty('--duration', (6 + Math.random() * 10) + 's');
            p.style.setProperty('--delay', (Math.random() * 8) + 's');
            p.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
            const size = 1 + Math.random() * 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            if (Math.random() > 0.7) {
                p.style.boxShadow = '0 0 8px 2px rgba(201, 168, 76, 0.6)';
            }
            particlesContainer.appendChild(p);
        }
    }
});
