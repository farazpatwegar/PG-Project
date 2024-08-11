// Validate form and trigger animations

export const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    let isValid = true;
  
    // Example validation logic
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        // Add error styles or messages
      }
    });
  
    if (isValid) {
      // Submit form or show success message
      console.log('Form submitted');
    } else {
      console.log('Form has errors');
    }
  };
  
  export const triggerAnim = (field) => {
    // Example animation logic
    const inputBox = document.getElementById(`${field}-inputBox`);
    if (inputBox) {
      inputBox.classList.add('active');
    }
  };
  