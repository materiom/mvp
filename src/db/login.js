// Function to log user in
const login = async (email, password) => {
  const rawResponse = await fetch(`${process.env.REACT_APP_DB_URL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const content = await rawResponse.json();

  console.log(content);
};

export default login;
