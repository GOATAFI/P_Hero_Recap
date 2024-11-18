fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const loadUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (data) => {
  //   console.log(data);
  const display = document.getElementById("users_list");
  //   display.innerHTML = data[0].name;
  for (let displayData of data) {
    console.log(displayData);
    const li = document.createElement("li");
    li.innerText = displayData.name;
    display.appendChild(li);
  }
};
