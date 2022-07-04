console.log(process.env.REACT_APP_DB_URL)


const register = async (email, password) => {
  const rawResponse = await fetch(`${process.env.REACT_APP_DB_URL}/register`, {
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

export default register;
