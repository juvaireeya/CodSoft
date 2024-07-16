// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (name && phone && email) {
            addContact(name, phone, email);
            contactForm.reset();
        }
    });

    function addContact(name, phone, email) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name} - ${phone} - ${email}</span>
            <button class="delete-btn" onclick="deleteContact(this)">Delete</button>
        `;
        contactList.appendChild(li);
    }
});

function deleteContact(button) {
    const li = button.parentElement;
    li.remove();
}
