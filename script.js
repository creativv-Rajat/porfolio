// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  // Array of text options
const texts = ["Passionate Teacher", "Full Stack Developer", "Math Enthusiast"];
let index = 0;

// Target the dynamic-text element
const dynamicText = document.querySelector(".dynamic-text");

// Function to update the text
function updateText() {
  dynamicText.textContent = texts[index]; // Set new text
  index = (index + 1) % texts.length; // Loop back to the start if at the end
}

// Sync text update with CSS animation duration
setInterval(updateText, 2000); // Change every 2 seconds
updateText(); // Initialize the first text
  
  // Contact Form Submission Alert
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Clear form fields
  });