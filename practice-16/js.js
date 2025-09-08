const Fetchbutton = document.getElementById("fetch");
const list = document.querySelector(".user-list");

Fetchbutton.addEventListener("click", fetchUser);

function fetchUsers() {
  fetchData()
    .then((users) => renderUsers(users))
    .catch((error) => console.log("error", error));
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
  // .then((data) => {
  //   //! Data handling
  //   console.log("data:", data); //! масив об'єктів з користувачами
  // });
  // .catch((error) => {
  //   //! Error handling
  //   console.log("error:", error);
  // });
}

function renderUsers(users) {
  const markUp = users
    .map((user) => {
      return `
        <li>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        </li>   
        `;
    })
    .join("");

  list.innerHTML = markUp;
}
