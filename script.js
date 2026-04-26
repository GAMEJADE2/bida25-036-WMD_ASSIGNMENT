document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});
 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});
 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
 
  const name = document.getElementById("FirstName");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const date = document.getElementById("date");
  const message = document.getElementById("email");
 
  const successMsg = document.getElementById("successMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("button clicked");
    alert("Booking Sent!");
 
  });
 
    // Hide all errors first
    document.querySelectorAll(".error-msg").forEach(msg => {
      msg.style.display = "none";
    });
 
    // Validation
    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (email.value.trim() === "") {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (service.value === "") {
      service.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (date.value === "") {
      date.nextElementSibling.style.display = "block";
      isValid = false;
    }
 
    if (!isValid) return;
 
    // Create booking object
    const booking = {
      name: name.value,
      email: email.value,
      service: service.value,
      date: date.value,
      message: message.value,
      time: new Date().toLocaleString()
    };
 
    // Get existing bookings OR empty array
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    // Add new booking
    bookings.push(booking);
 
    // Save back to storage
    localStorage.setItem("bookings", JSON.stringify(bookings));
 
    console.log("New Booking Saved:", booking);
 
    // Success UI
    successMsg.style.display = "block";
    form.reset();
 
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
 
 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
 
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
 
                // Stop observing after animation (performance boost)
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
 
    items.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 
        observer.observe(item);
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
 
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});
 
