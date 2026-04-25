document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Stops page from refreshing

        // 1. Get the values directly from the IDs in your HTML
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;  // Matches your id="date"
        const time = document.getElementById("time").value;  // Matches your id="time"
        const notes = document.getElementById("message").value; // Matches your id="message"

        // 2. The WhatsApp Number
        const whatsappNumber = "26777462000";

        // 3. Create the message using backticks
        const message = `Hello Glow Haven! 💖
I would like to book an appointment:
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
💅 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
📄 Notes: ${notes || "None"}

Thank you!`;

        // 4. Send the message
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(url, '_blank');
        
        // Optional: Reset form after sending
        bookingForm.reset();
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple feedback for the user
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Message sent! We'll get back to you in Gaborone soon.");
        btn.innerText = originalText;
        btn.disabled = false;
        e.target.reset();
    }, 1500);
});
// Applies fade-in animation to all service cards (including new ones like Nail Care)

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

            // Stop observing after animation is triggered (better performance)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards safely
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        observer.observe(card);
    });
});

// cta banner

document.addEventListener("DOMContentLoaded", () => {
    const ctaElement = document.querySelector('.cta-content');

    if (ctaElement) {
        observer.observe(ctaElement);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    galleryItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.5s ease-out";

        revealObserver.observe(item);
    });
});