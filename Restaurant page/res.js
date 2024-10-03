const contentDiv = document.getElementById('content');

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

const homepage = `
    <h1>Welcome to our restaurant!</h1>
    <p>We serve the best food in town.</p>
    <img src="https://via.placeholder.com/200x200" alt="Restaurant image">
`;

const menu = `
    <h1>Our Menu</h1>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;

const contact = `
    <h1>Get in touch</h1>
    <p>Contact us at <a href="mailto:example@example.com">example@example.com</a></p>
`;

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = homepage;
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = menu;
});

contactButton.addEventListener('click', () => {
    contentDiv.innerHTML = contact;
});

// Show the homepage by default
contentDiv.innerHTML = homepage;