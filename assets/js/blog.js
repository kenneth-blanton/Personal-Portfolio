// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = e => {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = () => {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// Creating a way to make the contact button scroll to the top

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

var rootElement = document.documentElement;

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scrollToTopBtn.addEventListener("click", scrollToTop)

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Logging blog data

getData()
.then(buildPage)
.catch(error => {
    console.log(error);
});

async function getData() {
    const fetching = await fetch("blog.json"); // fetched data as a variable
    console.log(fetching);
    return fetching.json();
}

function buildPage(data) {
  console.log(data);
  document.getElementById("app").innerHTML = `
  ${data.map(taskTemplate).join("")}
`;
}

function taskTemplate(eachTask) {
  /* 
  The map function iterates through an array
  Set up a parameter for it (eachTask)
  Use that parameter (eachTask) just like data 
  */
 console.log(eachTask.next);
  return  `
  <div class="card">
      <p class="date">${eachTask.date}</p>     
      <p class="next">${eachTask.mission ? `<u>Mission of the Day</u><br>` + eachTask.mission.join("<br>"):""}</p>
      <p class="acc">${eachTask.accomplished ? `<u>Accomplished</u><br>` + eachTask.accomplished.join("<br>"):""}</p>
      <p class="next">${eachTask.next ? `<u>Next</u><br>` + eachTask.next.join("<br>"):""}</p>
  </div>`
}