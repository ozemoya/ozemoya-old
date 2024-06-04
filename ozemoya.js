$(document).ready(() => {
  const $closeButton = $("#WindowClose");

  // Get the div that contains the "Contacts" text
  const $contactsDiv = $(".dapp3");
  // Get the div that contains the "Music" text
  const $musicDiv = $(".dapp4");
  // Get the .window div
  const $windowDiv = $(".window");
  // Get the .spotify-container div
  const $spotifyDiv = $(".spotify-container");

  // Hide the window by default
  $windowDiv.hide();
  $spotifyDiv.hide();

  $("#WindowClose").on("click", () => {
    $windowDiv.hide();
  });

  $contactsDiv.on("click", () => {
    $windowDiv.show();
  });

  $musicDiv.on("click", () => {
    $spotifyDiv.show();
  });

  // Update clock function
  const updateTime = () => {
    const $TimeElement = $("#Time");
    const now = new Date();
    $TimeElement.text(now.toLocaleTimeString());
  };

  updateTime();
  setInterval(updateTime, 1000);

  // Update date function
  const updateDate = () => {
    const $TimeElement = $("#Date");
    const now = new Date();
    $TimeElement.text(now.toLocaleDateString());
  };

  updateDate();
  setInterval(updateDate, 1000);

  $(window).on('beforeunload', (event) => {
    console.log("Before unload");
    event.returnValue = 'Are you sure you want to leave?';
    return 'Are you sure you want to leave?';
  });

  $(window).on('load', () => {
    const $headline = $('#headline');
    $headline.addClass('animated-headline'); // Ensures the animation starts on load

    // Initialize the news ticker
    initializeNewsTicker();

    // Show loading screen
    $('.loading-screen').show();

    // Hide loading screen after 8 seconds
    setTimeout(() => {
      $('.loading-screen').hide();
    }, 8000);
  });

  const apiKey = '3702918983a4465894f86153fcaabf02';  // Replace with your actual API key
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const fetchNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const updateTicker = (headlines) => {
    const $headlineDiv = $('#headline');
    let currentHeadline = 0;

    $headlineDiv.text(headlines[currentHeadline].title); // Initialize with the first headline

    setInterval(() => {
      currentHeadline = (currentHeadline + 1) % headlines.length; // Cycle through headlines
      $headlineDiv.text(headlines[currentHeadline].title);
    }, 10000); // Update headline every 10 seconds
  };

  const initializeNewsTicker = async () => {
    const articles = await fetchNews();
    if (articles.length) {
      updateTicker(articles);
    }
  };

  $(window).on('resize',() => {
    console.log($(window).width(), $(window).height());
    if ($(window).width() <= 500) {
      $(body).css("ozemoyalogo.gif").hide();
    } else {
      $(body).css("ozemoyalogo.gif").show(); 
    } 
  });
 
  console.log("jQuery is loaded");
});
