import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox enables the button", () => {
  render(<SummaryForm />);

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox");
  expect(confirmButton).toBeDisabled();
  expect(checkbox).not.toBeChecked();
  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
});

test("popover responses to the hover", async () => {
  render(<SummaryForm />);
  // popover hidden initially
  const nullPopover = screen.queryByText(/no ice cream will be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  // popover shows up when it is hovered on
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popoverElement = screen.getByText(
    /no ice cream will actually be delivered/i
  );
  expect(popoverElement).toBeInTheDocument();

  // popover hides when the hover is removed
  userEvent.unhover(termsAndConditions);
  screen.queryByText(/no ice cream will be delivered/i);
});
