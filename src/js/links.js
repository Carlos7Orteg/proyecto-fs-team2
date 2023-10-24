// Get "link" class
const linkElements = document.querySelectorAll('.link');

// Handle the click on each link
linkElements.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Link path
    const href = link.getAttribute('href');

    // Redirect to URL - client side
    window.location.href = href; // Redirect to link path
  });
});
