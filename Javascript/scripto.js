// Open the popup
document.getElementById("open-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });
  
  //close the popup
  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });
  
  // form submission
  document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Add your code to handle the form submission
    console.log("Sign up form submitted");
  });
  
  const text = "Welcome to the place where you can choose your own furnishings and feel at ease.";
  const typingSpeed = 60; 
  
  let charIndex = 0;
  const typingElement = document.getElementById("welcoming");
  
  function typeText() {
    if (charIndex < text.length) {
      typingElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
  
  // Start typing when the page loads
  window.addEventListener("DOMContentLoaded", typeText);
    

  
 