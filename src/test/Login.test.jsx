import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import * as authApi from "../api/auth";
import Login from "../pages/Login";

// Mock navigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Login Component - API Mock Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  //  Button renders
  test("renders login button", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  //  Form input updates
  test("updates email and password fields when typing", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(emailInput, "test@gmail.com");
    await userEvent.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("test@gmail.com");
    expect(passwordInput).toHaveValue("123456");
  });

  //  Invalid login (mocked API reject)
  test("shows alert when API login fails", async () => {
    const alertMock = vi
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    vi.spyOn(authApi, "loginUser").mockRejectedValue({
      message: "Invalid credentials",
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await userEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith("Invalid credentials");
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    alertMock.mockRestore();
  });

  //  Successful login (mocked API resolve)
  test("successful login sets localStorage and navigates", async () => {
    vi.spyOn(authApi, "loginUser").mockResolvedValue({
      token: "fake-token",
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await userEvent.type(
      screen.getByLabelText(/email address/i),
      "anything@gmail.com"
    );

    await userEvent.type(
      screen.getByLabelText(/password/i),
      "anypassword"
    );

    await userEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    await waitFor(() => {
      expect(localStorage.getItem("isAuth")).toBe("true");
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
