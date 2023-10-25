const weekendInfo = document.querySelector(".weekend-stay");

function fetchWeekendStay() {
    fetch("https://glamping.webmcdm.dk/stays/6533c19ad89bd7c9ba8de72e")
    .then (response => {
     if (!response.ok) {
      throw new Error(response.status);
     }
      return response.json();
     })
     .then((weekendstay) => renderWeekendStayInfo(weekendstay))
     .catch((error) => console.log(error));
  }
  
  fetchWeekendStay();

  function renderWeekendStayInfo(weekendstays) {
    const markup = weekendstays
      .map((weekendstay) => {
        return `<div class="weekendstay-item">
        <h2 class="weekend-second-title">Tag væk en weekend, med én du holder af</h2>
        <p class="weekend-text">${weekendstay.description},</p>
        <h3 class="weekend-third-title"> Med i pakken, er der inkluderet: </h3>
        <ul>
        <li><p class="weekend-small-text">${weekendstay.includes[0]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[1]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[2]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[3]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[4]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[5]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[6]}</p></li>
        <li><p class="weekend-small-text">${weekendstay.includes[7]}</p></li>
        </ul>
        <p class="weekendstay-price">Pris ${weekendstay.price},-</p>
        <a href="contact.html" class="book-now">BOOK NU</a>
        </div>
          </div>`;
      })
      .join("");
      weekendInfo.innerHTML = markup;
  } 
