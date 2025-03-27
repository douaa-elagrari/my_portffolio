const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var typed = new Typed(".text", {
  strings: ["Web Developer", "Mobile Developer", "AI Engineer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
}
);





function startProgress(selector, endValue, speed) {
  let progress = document.querySelector(selector),
      value = progress.querySelector('.progress-value');
  let startValue = 0;

  let interval = setInterval(() => {
      startValue++;
      value.textContent = `${startValue}%`;
      progress.style.background = `conic-gradient(${getComputedStyle(value).color} ${startValue * 3.6}deg, #ededed 0deg)`;

      if (startValue === endValue) {
          clearInterval(interval);
      }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  startProgress('.html-css', 90, 30);
  startProgress('.javascript', 75, 30);
  startProgress('.php', 80, 30);
  startProgress('.reactjs', 85, 30);
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


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally
  
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  if (firstName === "" || lastName === "" || email === "" || service === "" || message === "") {
      alert("Please fill out all required fields.");
      return;
  }

  alert("Form submitted successfully! ✅");
});


function toggleReadMore(event, button) {
  event.preventDefault();
  const card = button.closest('.card');
  card.classList.toggle('expanded');
}
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 100; 
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
      });
  });
});

const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Adjusted for small sections
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;

            // Check if the section is in the viewport
            if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });// Add this JavaScript (keep your existing regex validation)
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Your existing validation here
      
      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          alert('Message sent successfully!'); // Replace with your UI feedback
          this.reset();
        } else {
          throw new Error('Failed to send');
        }
      })
      .catch(() => alert('Error sending message'));
    });