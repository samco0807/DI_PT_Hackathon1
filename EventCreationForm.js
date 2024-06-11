const fetchData=document.querySelector(".event-form")
fetchData.addEventListener("submit", (e)=>{
event.preventDefault()

const eventName=document.querySelector("#event-name")
const eventOrganiser=document.querySelector("#organiser")
const eventLocation=document.querySelector("#location")
const eventBudget=document.querySelector("#budget")
const eventDate=document.querySelector("#datetime")
const eventPhoneNumber=document.querySelector("#phonenumber")
const eventEmail=document.querySelector("#email")
const eventNumberOfAttendees=document.querySelector("#numberofattendees")
const eventDescription=document.querySelector("#description")
const eventCategory=document.querySelector("#category")
const eventMailAttendees=document.querySelector("#email-attendees")

// Storage of the data event
const eventId=Date.now().toString() //This line generates a unique identifier for the event based on the current timestamp.
const eventData={
    id:eventId,
    name:eventName,
    organiser:eventOrganiser,
    location:eventLocation,
    budget: eventBudget,
    date: eventDate,
    phoneNumber: eventPhoneNumber,
    mail:eventEmail,
    numberOfAttendees: eventNumberOfAttendees,
    description:eventDescription,
category:eventCategory,
mailsOfAttendees:eventMailAttendees,
rsvp_link:`${window.location.origin}/RSVPForm.html?eventId=${eventId}`
}
localStorage.setItem(eventId, JSON.stringify(eventData))

mailsOfAttendees.forEach(email => {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: email.trim(),
    nname:eventName,
    organiser:eventOrganiser,
    location:eventLocation,
    budget: eventBudget,
    date: eventDate,
    phoneNumber: eventPhoneNumber,
    mail:eventEmail,
    numberOfAttendees: eventNumberOfAttendees,
    description:eventDescription,
category:eventCategory,
    rsvp_link: `${window.location.origin}/rsvp.html?eventId=${eventId}`
  });
});

})
// ADD AND DELETE A NEW ATTENDEE EMAIL TO THE FORM

//1. select plus button
const addBtn = document.querySelector("#add-btn");
// select container where I want to add the input group
const inputContainer = document.querySelector(".input-container");

//2. Create event to add an input group when the button "plus" is clicked
addBtn.addEventListener("click", () => {
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
  inputContainer.appendChild(newInputGroup);

  // Delete the input group attendee mail
  const deleteAttendee = newInputGroup.querySelector("#delete-btn");
  deleteAttendee.addEventListener("click", () => {
    newInputGroup.remove();
  });
});