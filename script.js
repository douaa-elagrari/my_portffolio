const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
var typed = new Typed(".text", {
  strings: ["Web Developer", "Mobile Developer", "AI Engineer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function startProgress(selector, endValue, speed) {
  let progress = document.querySelector(selector),
    value = progress.querySelector(".progress-value");
  let startValue = 0;

  let interval = setInterval(() => {
    startValue++;
    value.textContent = `${startValue}%`;
    progress.style.background = `conic-gradient(${
      getComputedStyle(value).color
    } ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === endValue) {
      clearInterval(interval);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  startProgress(".html-css", 90, 30);
  startProgress(".javascript", 75, 30);
  startProgress(".php", 80, 30);
  startProgress(".reactjs", 85, 30);
});

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMessageId = `error${
    fieldId.charAt(0).toUpperCase() + fieldId.slice(1)
  }`;
  let errorMessageElement = document.getElementById(errorMessageId);

  if (!errorMessageElement) {
    errorMessageElement = document.createElement("div");
    errorMessageElement.className = "error-message";
    field.parentNode.insertBefore(errorMessageElement, field.nextSibling);
  }

  errorMessageElement.textContent = message;
}

function toggleReadMore(event, button) {
  event.preventDefault();
  const card = button.closest(".card");
  card.classList.toggle("expanded");
}
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 100;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Adjusted for small sections
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

    // Check if the section is in the viewport
    if (
      scrollPosition >= sectionTop - sectionHeight / 2 &&
      scrollPosition < sectionTop + sectionHeight / 2
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll(".error-message").forEach((msg) => msg.remove());

    let isValid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    // Validation checks
    if (!firstName) {
      showError("firstName", "First name is required");
      isValid = false;
    }
    if (!lastName) {
      showError("lastName", "Last name is required");
      isValid = false;
    }
    if (!email) {
      showError("email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError("email", "Enter a valid email (e.g., user@example.com)");
      isValid = false;
    }
    if (phone && !phoneRegex.test(phone)) {
      showError("phone", "Enter a valid phone number (e.g., 123-456-7890)");
      isValid = false;
    }
    if (!service) {
      showError("service", "Please select a service");
      isValid = false;
    }
    if (!message) {
      showError("message", "Message is required");
      isValid = false;
    } else if (message.length < 10) {
      showError("message", "Message must be at least 10 characters");
      isValid = false;
    }

    // Stop form submission if validation fails
    if (!isValid) {
      return;
    }

    // If form is valid, proceed with submission
    fetch(event.target.action, {
      method: "POST",
      body: new FormData(event.target),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully! ✅");
          event.target.reset();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(() => alert("Network error. Please try again later."));
  });

//show error messages
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMessageId = `error${
    fieldId.charAt(0).toUpperCase() + fieldId.slice(1)
  }`;
  let errorMessageElement = document.getElementById(errorMessageId);

  if (!errorMessageElement) {
    errorMessageElement = document.createElement("div");
    errorMessageElement.className = "error-message";
    errorMessageElement.id = errorMessageId;
    field.parentNode.insertBefore(errorMessageElement, field.nextSibling);
  }

  errorMessageElement.textContent = message;
}

// Add this script RIGHT AFTER your opening <body> tag
(function() {
  // 1. Create the schema data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Douaa Elagrari",
    "jobTitle": "Mobile Web & AI Integration Developer",
    "url": document.location.href,
    "sameAs": [
      "https://github.com/douaa-elagrari",
      "https://www.linkedin.com/in/douaa-elagrari-1163b6314/" 
    ],
    "image": "./my_pic.png"
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  
  document.head.insertBefore(script, document.head.firstChild);
  
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  document.body.prepend(noscript);
})();