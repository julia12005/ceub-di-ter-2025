window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        let body = '';
        for (const [key, value] of formData.entries()) {
            body += `${key}: ${value}\n`;
        }

        const mailtoLink = `mailto:julia.p.b@sempreceub.com?subject=${encodeURIComponent('Contato de ' + formData.get('name'))}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
});
