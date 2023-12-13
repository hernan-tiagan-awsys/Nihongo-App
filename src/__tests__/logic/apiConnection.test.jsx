import { describe } from "vitest";

const login = async (email, password) => {
  const response = await fetch(
    `${import.meta.env.VITE_LOCALHOST_API}/api/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (!response.ok) {
    return 400;
  }

  if (response.ok) {
    return 200;
  }
};

describe("Check if API is online", () => {
  it("Checker", async () => {
    await login("nan@awsys-i.com", "Wew@123321");
  });
}, 1000);
