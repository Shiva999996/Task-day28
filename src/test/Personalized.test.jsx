import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Personalized from "../components/Personalized";

// Mock navigate - create a  fake function
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Personalized Component - Dialog Tests", () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders delete account button", () => {
    render(
      <MemoryRouter>
        <Personalized />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /delete account/i })
    ).toBeInTheDocument();
  });

  it("opens dialog when delete button is clicked", async () => {
    render(
      <MemoryRouter>
        <Personalized />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", { name: /delete account/i })
    );

    expect(
      screen.getByRole("alertdialog")
    ).toBeInTheDocument();
  });

  it("closes dialog when cancel is clicked", async () => {
    render(
      <MemoryRouter>
        <Personalized />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    // Open dialog
    await user.click(
      screen.getByRole("button", { name: /delete account/i })
    );

    // Click cancel
    await user.click(
      screen.getByRole("button", { name: /cancel/i })
    );

    // Wait for MUI dialog animation + unmount
    await waitFor(() => {
      expect(
        screen.queryByRole("alertdialog")
      ).not.toBeInTheDocument();
    });
  });

  it("navigates to home when confirm delete is clicked", async () => {
    render(
      <MemoryRouter>
        <Personalized />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", { name: /delete account/i })
    );

    await user.click(
      screen.getByRole("button", { name: /yes, delete/i })
    );

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

});
