const closeButton = document.getElementById("WindowClose");

      // Get the div that contains the "Contacts" text
      const contactsDiv = document.querySelector(".dapp3");
      // Get the div that contains the "Music" text
      const musicDiv = document.querySelector(".dapp4");
      // Get the .window div
      const windowDiv = document.querySelector(".window");
      // Get the .spotify-container div
      const spotifyDiv = document.querySelector(".spotify-container");
      // Hide the window by default
      windowDiv.style.display = "none";

      
      closeButton.addEventListener("click", () => {
        windowDiv.style.display = "none";
      });

      contactsDiv.addEventListener("click", () => {
        windowDiv.style.display = "block";
      });
      musicDiv.addEventListener("click", () => {
        spotifyDiv.style.display = "block";
      });
      
      //TODO: Create a function called updateClock
      //TODO: Create a variable called clockElement and set it equal to the element with the id of "clock"
      //TODO: Create a variable called now and set it equal to a new Date
      //TODO: Set the innerText of clockElement to now.toLocaleTimeString
      //TODO: Call updateClock
      //TODO: Call setInterval and pass it updateClock and 1000

     
      
      function updateTime(){
        const clockElement = document.getElementById("Time");
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString();
      }
  
      updateTime();
      setInterval(updateTime,1000);

      function updateDate(){
        const clockElement = document.getElementById("Date");
        const now = new Date();
        clockElement.innerText = now.toLocaleDateString();
      }

      updateDate();
      setInterval(updateDate,1000);

      // window.addEventListener('load', function() {
      //   document.getElementById('loading-screen').style.display = 'none';
      // });

      // setTimeout(function() {
      //   document.getElementById('loading-screen').style.display = 'block';
      // }, 2000);

      window.onbeforeunload = function() {
        console.log("Before unload")
        return 'Are you sure you want to leave?';
      }
      window.onload = function() {
        const headline = document.getElementById('headline');
        headline.classList.add('animated-headline'); // Ensures the animation starts on load
      };
      
      const apiKey = '3702918983a4465894f86153fcaabf02';  // Replace with your actual API key
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

function updateTicker(headlines) {
  const headlineDiv = document.getElementById('headline');
  let currentHeadline = 0;

  headlineDiv.textContent = headlines[currentHeadline].title; // Initialize with the first headline

  setInterval(() => {
    currentHeadline = (currentHeadline + 1) % headlines.length; // Cycle through headlines
    headlineDiv.textContent = headlines[currentHeadline].title;
  }, 10000); // Update headline every 10 seconds
}

async function initializeNewsTicker() {
  const articles = await fetchNews();
  if (articles.length) {
    updateTicker(articles);
  }
}

window.onload = initializeNewsTicker;
  
// Initialize the news ticker
  initializeNewsTicker();

   // Start headline animation
   const headline = document.getElementById('headline');
   headline.classList.add('animated-headline'); // Ensures the animation starts on load

   window.onload = function() {
  // Show loading screen
  document.querySelector('.loading-screen').style.display = 'flex';

  // Hide loading screen after 5 seconds
  setTimeout(() => {
    document.querySelector('.loading-screen').style.display = 'none';
  }, 8000);

};

$(document).ready(function() {
  console.log("jQuery is loaded");
});
$(selector).event(function(){
});