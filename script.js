document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsapp-btn');

    const phoneNumber = '5511993008123';
    const message = 'Olá! Gostaria de saber mais sobre os serviços do Kadu Ilusionista.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    whatsappBtn.href = whatsappUrl;

    whatsappBtn.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'WhatsApp Button'
            });
        }
    });
});
