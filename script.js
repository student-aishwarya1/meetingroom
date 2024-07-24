document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const date = document.getElementById('date').value;
    const roomType = document.getElementById('roomType').value;

    // Validate input fields
    if (!name || !email || !startTime || !endTime || !date || !roomType) {
        alert('Please fill out all fields');
        return;
    }

    // Ensure end time is after start time
    if (endTime <= startTime) {
        alert('End time must be after start time');
        return;
    }

    // Show booking confirmation
    alert('Room has been booked successfully!');
    
    // Optionally, you can submit the form here if needed
    event.target.submit();
});