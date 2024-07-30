let attendees = [];

function addAttendee(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact');

    const attendee = {
        name: nameInput.value,
        email: emailInput.value,
        contact: contactInput.value
    };

    attendees.push(attendee);
    nameInput.value = '';
    emailInput.value = '';
    contactInput.value = '';

    displayAttendees();
}

function displayAttendees() {
    const attendeeList = document.getElementById('attendee-list');
    attendeeList.innerHTML = '';

    attendees.forEach((attendee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${attendee.name}</td>
            <td>${attendee.email}</td>
            <td>${attendee.contact}</td>
        `;
        attendeeList.appendChild(row);
    });
}