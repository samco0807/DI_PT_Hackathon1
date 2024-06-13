document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("eventId");

  const eventData = JSON.parse(localStorage.getItem(eventId));
  if (eventData) {
    document.getElementById("event-details").innerHTML = `
        <h3>${eventData.name}</h3>
        <p><strong>Date:</strong> ${eventData.date}</p>
        <p><strong>Organiser:</strong> ${eventData.organiser}</p>
        <p><strong>Location:</strong> ${eventData.location}</p>
        <p><strong>Category:</strong> ${eventData.category}</p>
        <p><strong>Description:</strong>${eventData.description}</p>
      `;
  }
  const rsvpForm=document.getElementById("rsvp-form")
    rsvpForm.addEventListener("submit", (e)=> {
      e.preventDefault();
      const rsvp = document.querySelector('input[name="rsvp"]:checked').value;
      const userEmail = document.querySelector("#useremail").value

      eventData.rsvp[userEmail] = rsvp;
      localStorage.setItem(eventId, JSON.stringify(eventData));

      alert("RSVP submitted successfully!");
    });
});
