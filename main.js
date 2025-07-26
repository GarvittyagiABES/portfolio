// --- Dark/Light Mode Toggle ---
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('darkModeToggle');
  const modeIcon = document.getElementById('modeIcon');
  const body = document.body;
  let darkMode = true;
  function setMode() {
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      if (modeIcon) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
      }
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      if (modeIcon) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
      }
    }
  }
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      darkMode = !darkMode;
      setMode();
    });
    setMode();
  }
});
// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})
