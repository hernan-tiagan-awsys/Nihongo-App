import { it, describe, beforeEach, expect, vi, beforeAll } from "vitest";
import {
  act,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ContextWrapper from "../../../ui/components/ContextWrapper";
import App from "../../../ui/pages/main/App";

//For mockign of functions of App always use when importing App
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

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

  const json = await response.json();

  if (!response.ok) {
    return response.status;
  }

  if (response.ok) {
    localStorage.setItem("token", JSON.stringify(json));
    return json;
  }
};

const waitForLoader = async () => {
  const loader = await screen.findByTestId("loader");
  await waitFor(() => {
    expect(loader).not.toBeInTheDocument();
  });
};

describe("-------------- Navbar Render Testing --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_NAV-100 - Check if Navigation Bar renders properly", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
        screen.logTestingPlaygroundURL();
      });

      it("UT_NAV-101 - Renders the webpage", () => {
        screen.logTestingPlaygroundURL();
      });
      it("UT_NAV-102 - Should show the webpage Title", () => {
        const titleText = screen.getByText(/日本語・練習用・ツール/i);
        expect(titleText).toBeInTheDocument();
      });
      it("UT_NAV-103 - Should show the color mode toggle button", () => {
        const toggleButton = screen.getByTestId("color-mode-toggle");
        expect(toggleButton).toBeInTheDocument();
      });
    });
  });
});

describe("-------------- User is Logged out --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_NAV-200 Check if Navigation Bar renders properly when user is logged out", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });

      it("UT_NAV-201 - Should Show register button if user not logged in", () => {
        const registerButton = screen.getAllByText(/register/i);
        expect(registerButton[1]).toBeInTheDocument();
      });
      it("UT_NAV-202 - Should Show login button if user not logged in", () => {
        const loginButton = screen.getAllByText(/login/i);
        expect(loginButton[1]).toBeInTheDocument();
      });
    });
  });

  describe("-------------- Integration Testing --------------", () => {
    describe("VITEST_IT_NAV-100 - Check if user goes to login page after login page button click", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("IT_NAV-101 Should go to login page on login button click", () => {
        const loginButton = screen.getAllByText(/login/i);
        fireEvent.click(loginButton[1]);
        const textDisplay = screen.getByText(/Don't have an account yet?/i);
        expect(textDisplay).toBeInTheDocument();
      });
      it("IT_NAV-102 Should go to Register page on register button click", () => {
        const registerButton = screen.getAllByText(/register/i);
        fireEvent.click(registerButton[1]);
        const textDisplay = screen.getByText(/Already have an account?/i);
        expect(textDisplay).toBeInTheDocument();
      });
    });
  });
});

describe("-------------- User is Logged in --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_NAV-300  Check if Navigation Bar renders properly when user is logged in", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("UT_NAV-301 - Should login the user", async () => {
        const user = await act(() => {
          return login("nan@awsys-i.com", "Wew@123321");
        });
        expect(user).not.toBeNull();
        const token = localStorage.getItem("token");
        expect(token).not.toBeNull();
      });
      it("UT_NAV-302 - Should wait for the page to reload and change the navbar", async () => {
        await waitForLoader();
      });
      it("UT_NAV-303 - Should show user profile icon if user is logged in", async () => {
        const loader = await screen.findByTestId("loader");
        await waitForLoader();
        const userprofile = screen.getByTestId("nav-bar-menu-button");
        expect(userprofile).toBeInTheDocument();
      });
      it("UT_NAV-304 - Should show logout button if user is logged in", async () => {
        await waitForLoader();
        const userprofile = screen.getByText(/logout/i);
        expect(userprofile).toBeInTheDocument();
      });
    });
  });
  describe("-------------- Integration Testing --------------", () => {
    describe("VITEST_IT_NAV-200 - Check if user goes to login page after logout button click", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("IT_NAV-201 Should logout the user when logout button is clicked", async () => {
        await waitForLoader();
        const logoutButton = screen.getByText(/logout/i);
        expect(logoutButton).toBeInTheDocument();
        fireEvent.click(logoutButton);
        const user = localStorage.getItem("token");
        expect(user).toBeNull();
      });
      it("IT_NAV-202 Should go to login page on logout button click", async () => {
        const textDisplay = screen.getByText(/Don't have an account yet?/i);
        expect(textDisplay).toBeInTheDocument();
      });
    });
  });
});

//resets user login status
localStorage.removeItem("token");
