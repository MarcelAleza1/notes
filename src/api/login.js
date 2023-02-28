const loginFunc = (email, password) => {
  const base_url = "http://localhost:5000/login";
  fetch(base_url, {
    method: "POST",
    body: JSON.stringify({
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
export default loginFunc;
