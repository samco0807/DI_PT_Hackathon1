document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".event-form");
});

// SELECT AND SAVE IN LOCAL STORAGE DATA

const saveEvent = document.querySelector(".event-form");
saveEvent.addEventListener("submit", (e) => {
  e.preventDefault();

  // select every data in each field
  const eventName = document.querySelector("#event-name");
  const eventOrganiser = document.querySelector("#organiser");
  const eventLocation = document.querySelector("#location");
  const eventBudget = document.querySelector("#budget");
  const eventDate = document.querySelector("#datetime");
  const eventPhoneNumber = document.querySelector("#phonenumber");
  const eventEmail = document.querySelector("#organiser-mail");
  const eventNumberOfAttendees = document.querySelector("#numberofattendees");
  const eventDescription = document.querySelector("#description");
  const eventCategory = document.querySelector("#category");
  const eventMailAttendees = document.querySelector("#email-attendees");

  // store each data variable in an Object
  const eventData = {
    id: eventId,
    name: eventName,
    organiser: eventOrganiser,
    location: eventLocation,
    budget: eventBudget,
    date: eventDate,
    phoneNumber: eventPhoneNumber,
    mail: eventEmail,
    numberOfAttendees: eventNumberOfAttendees,
    description: eventDescription,
    category: eventCategory,
    mailsOfAttendees: eventMailAttendees,
    rsvp_link: `${window.location.origin}/RSVPForm.html?eventId=${eventId}`,
  };

  mailsOfAttendees.forEach((email) => {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      to_email: email.trim(),
      name: eventName,
      organiser: eventOrganiser,
      location: eventLocation,
      budget: eventBudget,
      date: eventDate,
      phoneNumber: eventPhoneNumber,
      mail: eventEmail,
      numberOfAttendees: eventNumberOfAttendees,
      description: eventDescription,
      category: eventCategory,
      rsvp_link: `${window.location.origin}/RSVPForm.html?eventId=${eventId}`,
    });
  });
  // Create an id for each event
  const eventId = Date.now().toString(); //This line generates a unique identifier for the event based on the current timestamp.

  const saveEvent = (eventData) => {
    // Get existing events from local storage
    let events = JSON.parse(localStorage.getItem("events")) || [];

    // Add the new event to the list
    events.push(eventData);

    // Save the updated list back to local storage
    localStorage.setItem("events", JSON.stringify(events));

    saveEvent(eventData);
  };
});

// ADD AND DELETE A NEW ATTENDEE EMAIL TO THE FORM

//1. select plus button
document.querySelector("#add-btn").addEventListener("click", () => {
  // select container where I want to add the input group
  const inputContainer = document.querySelector(".input-container");

  //2. Create event to add an input group when the button "plus" is clicked

  // Create new div
  const newInputGroup = document.createElement("div");
  // new div with className
  newInputGroup.className = "input-group mb-3";
  // insert in the div
  newInputGroup.innerHTML = `
    <span class="input-group-text">@</span>
    <input id="email-attendee" type="email" class="form-control" placeholder="exemple@exemple.com" aria-label="Username">
      <button id="delete-btn" type="button" class="btn btn-dark" style="border-color: beige;">Delete Attendee</button>
`;
  //3. add the newly created input group to the input container
  inputContainer.insertBefore(newInputGroup, inputContainer.lastElementChild);

  // Delete the input group attendee mail
  const deleteAttendee = document.querySelector("#delete-btn");
  deleteAttendee.addEventListener("click", () => {
    newInputGroup.remove();
  });
});
