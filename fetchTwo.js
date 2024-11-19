const loadPosts = (data) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPosts(data));
  //   console.log(data);
};
const displayPosts = (data) => {
  console.log(data);
  const displayPosts = document.getElementById("displayPosts");
  for (const post of data) {
    const divL = document.createElement("div");
    divL.innerHTML = `
    <h5> User - ${post.userId}  </h5>
    <h4> Title - ${post.title} </h4>
    <p> Post Description - ${post.body} </p>
    `;
    displayPosts.appendChild(divL);
  }
};
