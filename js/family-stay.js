const familyStayInfo = document.querySelector(".family-stay");

function fetchFamilyStay() {
    fetch("https://glamping.webmcdm.dk/stays/6533c25dd89bd7c9ba8de739")
    .then (response => {
     if (!response.ok) {
      throw new Error(response.status);
     }
      return response.json();
     })
     .then((familystay) => renderFamilyStayInfo(familystay))
     .catch((error) => console.log(error));
  }
  
  fetchFamilyStay();

  function renderFamilyStayInfo(familystays) {
    const markup = familystays
      .map((familystay) => {
        return `<div class="weekendstay-item">
        <h2 class="weekend-second-title">Tag væk en weekend, med én du holder af</h2>
        <p class="weekend-text">${familystay.description},</p>
        <h3 class="weekend-third-title"> Med i pakken, er der inkluderet: </h3>
        <ul>
        <li><p class="weekend-small-text">${familystay.includes[0]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[1]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[2]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[3]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[4]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[5]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[6]}</p></li>
        <li><p class="weekend-small-text">${familystay.includes[7]}</p></li>
        </ul>
        <p class="weekendstay-price">Pris ${familystay.price},-</p>
        <a href="contact.html" class="book-now">BOOK NU</a>
        </div>
          </div>`;
      })
      .join("");
      familyStayInfo.innerHTML = markup;
  } 
