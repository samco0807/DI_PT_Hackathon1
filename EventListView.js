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
document.addEventListener("DOMContentLoaded", ()=>{
    let events=JSON.parse(localStorage.getItem("events"))
})