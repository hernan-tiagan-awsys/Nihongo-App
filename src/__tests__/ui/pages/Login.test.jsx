import { it, describe, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContextWrapper from "../../../ui/components/ContextWrapper";
import App from "../../../ui/pages/main/App";

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

describe("-------------- Login Render Testing --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_LOGIN-100 Check if login page renders properly", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("VITEST_UT_LOGIN-101 Should Show the entire login page", () => {
        const loginButton = screen.getAllByText(/login/i);
        fireEvent.click(loginButton[1]);
        const textDisplay = screen.getByText(/Don't have an account yet?/i);
        expect(textDisplay).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-102 Should show Email input field", () => {
        const email = screen.getByPlaceholderText(/Email/i);
        expect(email).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-103 Should show Password input field", () => {
        const password = screen.getByPlaceholderText(/Enter password/i);
        expect(password).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-104 Should show Form's Login button", () => {
        const loginButton = screen.getByTestId("login-button");
        expect(loginButton).toBeInTheDocument();
      });
    });
  });
});
describe("-------------- Unit Testing --------------", () => {
  describe("VITEST_UT_LOGIN-200 Check if login form Show error alerts", () => {
    beforeEach(() => {
      render(
        <ContextWrapper>
          <App />
        </ContextWrapper>
      );
    });
    it("VITEST_UT_LOGIN-201 Should Show popup alert on both fields if login button pressed without both input fields", async () => {
      const loginButton = screen.getByTestId("login-button");
      fireEvent.click(loginButton);
      const emailPopUp = await screen.findByText(/Email field is empty/i);
      const passwordPopUp = await screen.findByText(/Password field is empty/i);
      expect(emailPopUp).toBeInTheDocument();
      expect(passwordPopUp).toBeInTheDocument();
    });
    it("VITEST_UT_LOGIN-202 Should Show popup alert on password field if login button pressed without input in email field", async () => {
      const password = screen.getByPlaceholderText(/Enter password/i);
      fireEvent.change(password, { target: { value: "palceholder" } });
      const loginButton = screen.getByTestId("login-button");
      fireEvent.click(loginButton);
      const emailPopUp = await screen.findByText(/Email field is empty/i);
      const passwordPopUp = await screen.findByText(/Password field is empty/i);
      expect(emailPopUp).toBeVisible();
      expect(passwordPopUp).not.toBeVisible();
    });
    it("VITEST_UT_LOGIN-203 Should Show popup alert on email field if login button pressed without input in password field", async () => {
      const email = screen.getByPlaceholderText(/Email/i);
      fireEvent.change(email, { target: { value: "palceholder" } });
      const loginButton = screen.getByTestId("login-button");
      fireEvent.click(loginButton);
      const emailPopUp = await screen.findByText(/Email field is empty/i);
      const passwordPopUp = await screen.findByText(/Password field is empty/i);
      expect(emailPopUp).not.toBeVisible();
      expect(passwordPopUp).toBeVisible();
    });
    it("VITEST_UT_LOGIN-204 Should Show popup alert if login button pressed when invalid inputs", async () => {
      const email = screen.getByPlaceholderText(/Email/i);
      const password = screen.getByPlaceholderText(/Enter password/i);
      fireEvent.change(email, { target: { value: "palceholder" } });
      fireEvent.change(password, { target: { value: "palceholder" } });
      const loginButton = screen.getByTestId("login-button");
      fireEvent.click(loginButton);
      const loader = await screen.findByTestId("loader");
      await waitFor(() => {
        expect(loader).not.toBeInTheDocument();
      });
      screen.logTestingPlaygroundURL();
      const popUp = await screen.findByText(
        /Check Password and Email if input is Valid/i
      );
      expect(popUp).toBeVisible();
    });
  });
});
describe("-------------- Integration Testing --------------", () => {
  describe("VITEST_IT-100 Check if login form logins user correctly", () => {
    beforeEach(() => {
      render(
        <ContextWrapper>
          <App />
        </ContextWrapper>
      );
    });
    it("VITEST_IT-101 Should fill up login form and login user", async () => {
      //User Data to Use
      const emailInput = "nan";
      const passInput = "Wew@123321";
      //Set User's Data inside Input Fields
      const emailField = screen.getByPlaceholderText(/Email/i);
      const passField = screen.getByPlaceholderText(/Enter password/i);
      expect(emailField).toBeInTheDocument();
      expect(passField).toBeInTheDocument();
      fireEvent.change(emailField, { target: { value: emailInput } });
      fireEvent.change(passField, { target: { value: passInput } });
      //Simulate user clicking the button
      const loginButton = screen.getByTestId("login-button");
      //Token is null
      fireEvent.click(loginButton);
      //Token is null
      //Wait for loading to finish
      const loader = await screen.findByTestId("loader");
      await waitFor(() => {
        expect(loader).not.toBeInTheDocument();
      });
      //Popup confirmation when user logged in successfuly
      const confirmationPopUp = await screen.findByText(/User Logged In/i);
      await waitFor(() => {
        expect(confirmationPopUp).toBeInTheDocument();
      });
      //Token is set
    });
    it("VITEST_IT-102 Should set Login button to logout and user token should be set", async () => {
      //Wait for loading to finish
      const loader = await screen.findByTestId("loader");
      await waitFor(() => {
        expect(loader).not.toBeInTheDocument();
      });
      //Check if user can see the logout button
      const logoutButton = await screen.findByText("Logout");
      await waitFor(() => {
        expect(logoutButton).toBeInTheDocument();
      });
      const token = localStorage.getItem("token");
      expect(token).not.toBeNull();
    });
    it("VITEST_IT-103 Should redirect user to main page", async () => {
      const loader = await screen.findByTestId("loader");
      await waitFor(() => {
        expect(loader).not.toBeInTheDocument();
      });
      const kanji = screen.getByRole("heading", { name: /kanji questions/i });
      const vocab = screen.getByRole("heading", { name: /vocab questions/i });
      const grammar = screen.getByRole("heading", {
        name: /grammar questions/i,
      });
      expect(kanji).toBeInTheDocument();
      expect(vocab).toBeInTheDocument();
      expect(grammar).toBeInTheDocument();
    });
  });
});
