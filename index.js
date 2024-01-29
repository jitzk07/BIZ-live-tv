document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  function fadeInOut() {
    const currentOpacity = parseFloat(getComputedStyle(logo).opacity);
    const targetOpacity = currentOpacity === 0 ? 1 : 0; // Toggle between 0 and 1

    logo.style.opacity = targetOpacity;

    setTimeout(fadeInOut, 2000); // Adjust the delay (in milliseconds) between fades
  }

  fadeInOut();
});







document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.line');
    
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = "fadeInUp 1s forwards";
      }, index * 1500); // Adjust the delay (index * 1000) for each line
    });
  });

