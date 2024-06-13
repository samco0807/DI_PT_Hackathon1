// Filter events
const searchBox= document.querySelector("#search-box")
searchBox.addEventListener("input", ()=>{
    let filter=this.value.toLowerCase()
    let eventLines=document.querySelectorAll("row")
    eventLines.forEach(line=>{
        let title=line.querySelector("")

    })
})

// Load event from storage
const loadEvents=()=>{
  let events=JSON.parse(localStorage.getItem('events')) || [];
  const tableBody = document.querySelector('tbody');

   // Clear the existing table content
   tableBody.innerHTML = '';


  // Populate the table with events
  events.forEach(event => {
    const row = document.createElement('tr');
    row.dataset.id = event.id;
    
    row.innerHTML = `
      <th scope="row">${event.date}</th>
      <td>${event.status}</td>
      <td>${event.name}</td>
      <td>${event.location}</td>
      <td>${event.type}</td>
      <td>${event.attendeesConfirmed}</td>
      <td>${event.waitingAnswer}</td>
      <td>${event.description}</td>
      <td>
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-secondary">Delete</button>
        <button type="button" class="btn btn-warning">
          <a href="Reminder.html">Reminder</a>
        </button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });

  // Add event listeners to the buttons
  addEventListeners();
}

// Call loadEvents when the page loads
document.addEventListener('DOMContentLoaded', loadEvents)

// On the event detail or reminder page
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("eventId");
const eventData = getEventData(eventId);


// Make sur that each event has a unique ID and is stored in local storage.
const saveEvent = (eventData) => {
    const eventId = Date.now().toString(); // Unique ID for each event
    eventData.id = eventId;
    localStorage.setItem(eventId, JSON.stringify(eventData));
  };

// Add event listeners to handle Edit, Delete, and Reminder actions
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-primary").forEach((button) => {
      button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        const eventId = row.dataset.id; // Assuming each row has a data-id attribute
        window.location.href = `EventDetailPage.html?eventId=${eventId}`;
      });
    });
  
    document.querySelectorAll(".btn-secondary").forEach((button) => {
      button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        const eventId = row.dataset.id; // Assuming each row has a data-id attribute
        row.remove();
        localStorage.removeItem(eventId); // Remove event from local storage
      });
    });
  
    document.querySelectorAll(".btn-warning").forEach((button) => {
      button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        const eventId = row.dataset.id; // Assuming each row has a data-id attribute
        window.location.href = `Reminder.html?eventId=${eventId}`;
      });
    });
  });