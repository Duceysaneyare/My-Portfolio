/* ----- NAVIGATION BAR FUNCTION ----- */


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    


/* ----- TYPING EFFECT ----- */
   

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  
   
/* ----- NAVIGATION BAR FUNCTION ----- */


function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Web Designer","App Developer"," Web Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)


/* ----- CONTACT FORM FUNCTION ----- */

        document.getElementById('send-button').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Gather form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            // Basic validation
            if (name && email && message) {
                // Here you can send the data to your server or an email service
                console.log('Form Submitted:', { name, email, message });
                alert('Your message has been sent successfully!');
    
                // Clear the form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Please fill in all fields.');
            }
        });
    
        // Existing dark mode toggle code
        const toggleButton = document.getElementById('toggle-dark-mode');
        const modeIcon = document.getElementById('mode-icon');
    
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const elements = document.querySelectorAll('.btn, input, textarea');
            elements.forEach(el => el.classList.toggle('dark-mode'));
            document.getElementById('header').classList.toggle('dark-mode');
    
            // Toggle icon
            if (document.body.classList.contains('dark-mode')) {
                modeIcon.classList.remove('uil-moon');
                modeIcon.classList.add('uil-sun');
            } else {
                modeIcon.classList.remove('uil-sun');
                modeIcon.classList.add('uil-moon');
            }
        });
  