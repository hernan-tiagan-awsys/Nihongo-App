import { it, describe, expect, beforeEach } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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

describe("-------------- Register Vitest Testing --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-100 Check if register page renders properly", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("VITEST_UT_REGISTER-101 Should Show the entire register page", () => {
        const registerButton = screen.getAllByText(/register/i);
        fireEvent.click(registerButton[1]);
        const textDisplay = screen.getByText(/Already have an account?/i);
        expect(textDisplay).toBeInTheDocument();
      });
      it("VITEST_UT_REGISTER-102 Should show Email input field", () => {
        const email = screen.getByPlaceholderText(/Email/i);
        expect(email).toBeInTheDocument();
      });
      it("VITEST_UT_REGISTER-103 Should show Password input field", () => {
        const password = screen.getByPlaceholderText(/Enter password/i);
        expect(password).toBeInTheDocument();
      });
      it("VITEST_UT_REGISTER-104 Should show Verify Password input field", () => {
        const verifyPassword = screen.getByPlaceholderText("*******");
        expect(verifyPassword).toBeInTheDocument();
      });
      it("VITEST_UT_REGISTER-105 Should show register button", () => {
        const registerButton = screen.getByTestId("register-button");
        expect(registerButton).toBeInTheDocument();
      });
    });
  });
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-200 Verify if Verify Password is disabled if input is invalid format", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      const missingValuesToCheck = [
        { case: "Password missing eight-character.", value: "Test@12" },
        { case: "Password missing one uppercase.", value: "test@123" },
        { case: "Password missing one lowercase.", value: "TEST@123" },
        { case: "Password missing one number.", value: "Test@abc" },
        { case: "Password missing one special character.", value: "Test1234" },
      ];
      missingValuesToCheck.map((check, index) => {
        it(`VITEST_UT_REGISTER-20${index + 1} Should input ${
          check.case
        } into password and check if verify password is disabled`, () => {
          const password = screen.getByPlaceholderText(/Enter password/i);
          fireEvent.change(password, { target: { value: check.value } });
          expect(password.value).toBe(check.value);
          const verifyPassword = screen.getByPlaceholderText("*******");
          expect(verifyPassword).toBeDisabled();
        });
      });
    });
  });
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-300 Verify if Verify Password is enabled if input is valid format", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });

      it("VITEST_UT_REGISTER-301 Should Input valid format and check if verify password is enabled", () => {
        const value = "Test@123";
        const password = screen.getByPlaceholderText(/Enter password/i);
        fireEvent.change(password, { target: { value: value } });
        expect(password.value).toBe(value);
        const verifyPassword = screen.getByPlaceholderText("*******");
        expect(verifyPassword).toBeEnabled();
      });
    });
  });

  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-400 Verify if Verify Password is unmatched error is shown", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("VITEST_UT_REGISTER-401 Should Input unmatched password and check if error is shown and register button is disabled", () => {
        const valuePass = "Test@123";
        const valueVerPass = "Test@12";
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        const error = screen.getByText(/Password does not match/i);
        expect(error).toBeVisible();
        const registerButton = screen.getByTestId("register-button");
        expect(registerButton).toBeDisabled();
      });
    });
  });
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-500 Verify if Verify Password is matched Register button is enabled", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("VITEST_UT_REGISTER-501 Should Input matched password and check if Register button is enabled", () => {
        const valuePass = "Test@123";
        const valueVerPass = "Test@123";
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        // const error = screen.getByText(/Password does not match/i);
        const registerButton = screen.getByTestId("register-button");
        // expect(error).not.toBeVisible();
        expect(registerButton).toBeEnabled();
      });
    });
  });
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_REGISTER-600 Verify if email or username is empty on submition alert is shown", () => {
      beforeEach(async () => {
        render(
          <ContextWrapper>
            <App />
          </ContextWrapper>
        );
      });
      it("VITEST_UT_REGISTER-601 Should Input matched password to enable register button", () => {
        const valuePass = "Test@123";
        const valueVerPass = "Test@123";
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        const registerButton = screen.getByTestId("register-button");
        expect(registerButton).toBeEnabled();
      });
      it("VITEST_UT_REGISTER-602 Should show alert on both inputs on register button press", async () => {
        const valuePass = "Test@123";
        const valueVerPass = "Test@123";
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        const registerButton = screen.getByTestId("register-button");
        act(() => {
          fireEvent.click(registerButton);
        });
        const usernamePopUp = await screen.findByText(
          /Username field is empty/i
        );
        const emailPopUp = await screen.findByText(/Email field is empty/i);
        expect(usernamePopUp).toBeVisible();
        expect(emailPopUp).toBeVisible();
      });
      it("VITEST_UT_REGISTER-603 Should show alert on username input on register button press", async () => {
        const valueUsername = "nan";
        const valuePass = "Test@123";
        const valueVerPass = "Test@123";
        const username = screen.getByPlaceholderText(/Username/i);
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(username, { target: { value: valueUsername } });
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        const registerButton = screen.getByTestId("register-button");
        fireEvent.click(registerButton);
        const emailPopUp = await screen.findByText(/Email field is empty/i);
        expect(emailPopUp).toBeVisible();
      });
      it("VITEST_UT_REGISTER-604 Should show alert on email input on register button press", async () => {
        const valueEmail = "nan";
        const valuePass = "Test@123";
        const valueVerPass = "Test@123";
        const username = screen.getByPlaceholderText(/Username/i);
        const password = screen.getByPlaceholderText(/Enter password/i);
        const verifyPassword = screen.getByPlaceholderText("*******");
        fireEvent.change(username, { target: { value: valueEmail } });
        fireEvent.change(password, { target: { value: valuePass } });
        fireEvent.change(verifyPassword, { target: { value: valueVerPass } });
        const registerButton = screen.getByTestId("register-button");
        fireEvent.click(registerButton);
        const emailPopUp = await screen.findByText(/Email field is empty/i);
        expect(emailPopUp).toBeVisible();
      });
    });
  });
});

// describe("-------------- Integration Testing --------------", () => {});
