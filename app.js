// Handle waitlist button click
function joinWaitlist() {
    alert("You’ll be among the first to know when Neo launches!");
  }
  
  // Handle waitlist form submission
  function handleWaitlist(event) {
    event.preventDefault();
    alert("Thank you for joining the waitlist! We’ll keep you posted.");
    
    return false;
  }
  
  // Auto-update footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }