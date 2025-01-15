// Select the back-to-top button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        backToTopBtn.classList.remove('d-none');
        backToTopBtn.classList.add('d-flex');
    } else {
        backToTopBtn.classList.remove('d-flex');
        backToTopBtn.classList.add('d-none');
    }
});
// Select the back-to-top button
// active section
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});
// active section
// slider
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('invisible');
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('invisible');
            }
        });
    }, { threshold: 0.1 });
    const targets = document.querySelectorAll('.timeline-content.invisible');
    targets.forEach(target => observer.observe(target));
});
// slider
// slider
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('rev-invisible');
                entry.target.classList.add('rev-visible');
            } else {
                entry.target.classList.remove('rev-visible');
                entry.target.classList.add('rev-invisible');
            }
        });
    });
    const targets = document.querySelectorAll('.timeline-content.rev-invisible');
    targets.forEach(target => observer.observe(target));
});
// slider


document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-value');
    const speed = 50; // The lower the number, the faster the count
    const countUp = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
// counter

// thank
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form data
    var formData = new FormData(this);
    
    // Perform the form submission via fetch
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show thank you message
            document.getElementById('myForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
            
            // Redirect after 5 seconds
            setTimeout(function () {
                window.location.href = '/#'; // Absolute URL
            }, 3000);
        } else {
            alert('Oops! There was a problem with your submission.');
        }
    }).catch(error => {
        alert('Oops! There was a problem with your submission.');
    });
});


document.getElementById('myFormm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get the form data
    var formData = new FormData(this);
    // Perform the form submission via fetch
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show thank you message
            document.getElementById('myFormm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
            // Redirect after 5 seconds
            setTimeout(function () {
                window.location.href = '/#'; // Replace with your website URL
            }, 3000);
        } else {
            alert('Oops! There was a problem with your submission.');
        }
    }).catch(error => {
        alert('Oops! There was a problem with your submission.');
    });
});
// thank

// contact window
var wind = document.getElementById("contactwind");
var span = document.getElementsByClassName("close")[0];
var contactButtons = document.querySelectorAll(".con-but .btn-primary");

contactButtons.forEach(function (button) {
    button.onclick = function () {
        wind.style.display = "block";
    };
});
span.onclick = function () {
    wind.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == wind) {
        wind.style.display = "none";
    }
};

document.getElementById('requestQuoteBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('d-none');
});
document.querySelector('.exit').addEventListener('click', function() {
    document.getElementById('formContainer').classList.add('d-none');
});
  // Optional: Hide form on clicking outside of the form content
document.getElementById('formContainer').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('d-none');
    }
    });
    document.getElementById('requestQuoteBtnn').addEventListener('click', function() {
        document.getElementById('formContainerr').classList.remove('d-none');
    });
    
    document.querySelector('.exitt').addEventListener('click', function() {
        document.getElementById('formContainerr').classList.add('d-none');
    });
    
      // Optional: Hide form on clicking outside of the form content
    document.getElementById('formContainerr').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('d-none');
        }
        });    
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(function() {
                alert('Phone number copied to clipboard!');
            }, function(err) {
                alert('Could not copy text: ', err);
            });
    }
// contact window

if (window.location.pathname === '/index-ar.html') {
    window.history.replaceState(null, null, '/');
}
if (window.location.pathname === '/index.html') {
    window.history.replaceState(null, null, '/');
}
// lang

function switchLanguage(lang) {
    // Get all elements that have data-en and data-ar attributes
    const elements = document.querySelectorAll('[data-en][data-ar]');

    elements.forEach(element => {
        if (lang === 'ar') {
            // Set text content to Arabic
            element.innerText = element.getAttribute('data-ar');
            // Apply RTL text direction only to the text elements
            element.style.direction = 'rtl';
        } else {
            // Set text content to English
            element.innerText = element.getAttribute('data-en');
            // Apply LTR text direction only to the text elements
            element.style.direction = 'ltr';
        }
    });
}
