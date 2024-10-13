// Changing the role dynamically
const roles = ["Python Developer", "Data Analyst", "Data Engineer", "Data Scientist", "ML Engineer", "AI Engineer","Gen AI Developer"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 150); // Typing effect speed
    } else {
        setTimeout(eraseRole, 2000); // Pause before erasing
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 100); // Erasing effect speed
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to next role
        setTimeout(typeRole, 500); // Pause before typing the next role
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeRole(); // Start the typing effect
});
