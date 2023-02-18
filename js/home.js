const showUsername = () => {
  const username = localStorage.getItem('currentLogin');
  document.querySelector(
    ".user-menu"
  ).innerHTML = `<i class="fa-solid fa-user"></i> ${username}`;
}
const logout = () => {
  localStorage.removeItem('currentLogin');
  window.location = '../html/sign-in.html';
}
$(".slider").each(function () {
  var $this = $(this);
  var $group = $this.find(".slide_group");
  var $slides = $this.find(".slide");
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass("active");
    bulletArray[newIndex].addClass("active");

    if (newIndex > currentIndex) {
      slideLeft = "100%";
      animateLeft = "-100%";
    } else {
      slideLeft = "-100%";
      animateLeft = "100%";
    }

    $slides.eq(newIndex).css({
      display: "block",
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: "none",
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      }
    );
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $(".next_btn").on("click", function () {
    if (currentIndex < $slides.length - 1) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $(".previous_btn").on("click", function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button
      .on("click", function () {
        move(index);
      })
      .appendTo(".slide_buttons");
    bulletArray.push($button);
  });

  advance();
});
const getWeather = async () => {
  const place = document.querySelector("#search-input").value;
  console.log(place);
  const defaultUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=JQQKA7B32A5DBBNY28V9RC423&contentType=json`;
  const response = await axios.get(defaultUrl);
  const data = response.data;
  return data;
};

const showWeather = () => {
  getWeather().then((data) => {
    document.querySelector(
      ".place-name"
    ).innerHTML = `<h3 class="place-name_heading"> ${data.resolvedAddress}</h3>`;
    data.days.map((item, index) => {
      document.querySelector(".weather-cards").insertAdjacentHTML(
        "beforeend",
        `<div class="weather-card">
                  <div class="weather-icon">
                  <img src='../images/weather-icons/${item.icon}.svg'
                </div>
                <h3 class="date">
                  <i class="fa-solid fa-calendar-days"></i>
                  ${item.datetime}
                </h3>
                <h3 class="feels-like">
                  <i class="fa-solid fa-child-reaching"></i>
                  ${item.feelslike} °C
                </h3>
                <h3 class="highest-temperature">
                  <i class="fa-solid fa-temperature-arrow-up"></i>
                  ${item.tempmax} °C            
                </h3>
                <h3 class="lowest-temperature">
                  <i class="fa-solid fa-temperature-arrow-down"></i>
                  ${item.tempmin} °C
                </h3>
                <h3 class="humidity">
                  <i class="fa-solid fa-droplet"></i>
                  ${item.humidity} %
                </h3>
              </div>`
      );
    });
  });
};

showUsername();