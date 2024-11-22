const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const phones = await res.json();
  displayPhones(phones);
};

const displayPhones = (phones) => {
  console.log(phones);
  const displayPhones = document.getElementById("displayPhones");
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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`;

    displayPhones.appendChild(cardDiv);
  }
};

loadPhone();
