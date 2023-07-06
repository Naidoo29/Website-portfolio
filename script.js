// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Validate form inputs
      if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // Construct email URL
      const email = 'mailto:yourname@example.com' + 
                    '?subject=' + encodeURIComponent('Portfolio Contact Form') +
                    '&body=' + encodeURIComponent(`
        Name: ${nameInput.value}
        Email: ${emailInput.value}
        Message: ${messageInput.value}
      `);
  
      // Open default email client with pre-filled email
      window.location.href = email;
    });
  });
  