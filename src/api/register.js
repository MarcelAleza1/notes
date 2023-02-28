const registerFunc = (first_name, last_name, email, password) => {
  const base_url = "http://localhost:5000/register";
  fetch(base_url, {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
  // return { email, password };
};
export default registerFunc;
