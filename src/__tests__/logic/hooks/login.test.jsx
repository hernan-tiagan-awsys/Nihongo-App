// import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

const login = async (email, password) => {
  const response = await fetch(
    `https://aws-nihongo-api.onrender.com/api/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  // const json = await response.json();

  if (!response.ok) {
    return response.status;
  }

  if (response.ok) {
    return 200;
  }
};

describe("Login UT Cases v1", () => {
  beforeEach(async () => {
    const status = await login("nan@awsys-i.com", "Wew@123321");
    console.log(status);
  }, 1000);
  it("UT1-001 - User successfully login ( ✓ email ; ✓ password)", async () => {
    const user = await login("nan@awsys-i.com", "Wew@123321");
    expect(user).toBe(200);
  });
  it("UT1-002 - Empty login credentials ((_) email ; (_) password)", async () => {
    const user = await login(null, null);
    expect(user).toBe(400);
  });
  it("UT1-003 - User not exist/Invalid login credential (✕ email ; ✕ password)", async () => {
    const user = await login("james.aljecera@awsys-i.com", "@Alje999");
    expect(user).toBe(400);
  });
  it("UT1-004 - Empty password credential [password] (✓ email ; (_) password)", async () => {
    const user = await login("nan@awsys-i.com", null);
    expect(user).toBe(400);
  });
  it("UT1-005 - Empty email credential ((_) email ; ✓ password)", async () => {
    const user = await login(null, "Wew@123321");
    expect(user).toBe(400);
  });
  it("UT1-006 - Invalid password (✓ email ; ✕ password)", async () => {
    const user = await login("nan@awsys-i.com", "@Alje999");
    expect(user).toBe(400);
  });
  it("UT1-007 - Invalid email (✕ email ; ✓ password)", async () => {
    const user = await login("dene@gmail.com", "Wew@123321");
    expect(user).toBe(400);
  });
});
