// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle show/hide experience details
  const experienceDetails = document.querySelectorAll('.experience');
  experienceDetails.forEach(experience => {
    const jobDetails = experience.querySelector('ul');
    const jobTitle = experience.querySelector('h3');
  
    jobTitle.addEventListener('click', () => {
      jobDetails.classList.toggle('show');
    });
  });