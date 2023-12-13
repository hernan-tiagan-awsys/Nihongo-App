export const retrieveProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch(
    `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    console.log(json.error);
    if (json.error === "Token has expired") {
      // dispatch({ type: "LOGOUT" });
      // remove token from local storage
      localStorage.removeItem("token");
    }
    throw new Error(json.error);
  }

  if (response.ok) {
    return json;
  }
};
