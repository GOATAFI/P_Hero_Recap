const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const phones = await res.json();
  displayPhones(phones);
};

const displayPhones = (phones) => {
  //   console.log(phones);
  const displayPhones = document.getElementById("displayPhones");
  displayPhones.innerHTML = ``;
  for (const phone of phones.data) {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    <div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src= ${phone.image}
      alt= ${phone.phone_name} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.brand}</p>
    <div class="card-actions justify-end">
      <button onclick="showDetailsF('${phone.slug}') " id="show-details" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>`;

    displayPhones.appendChild(cardDiv);
  }

  toggleLoadingSpinner(false);
};

const showDetailsF = async (id) => {
  const modal = document.createElement("div");
  //load single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const phoneData = await res.json();
  const phone = phoneData.data;
  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  console.log(phone);
  show_details_modal.showModal();
  const modal = document.getElementById("modalContainer");
  modal.innerHTML = `
  <img src="${phone.image}" alt="" />
    <h1>${phone.name}</h1>
    <h3>Storage : ${phone.mainFeatures.memory}</h3>
    `;
};

const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search_field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

loadPhone();
