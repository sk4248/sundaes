import * as React from "react";
import user from "@testing-library/user-event";
import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import UsernameForm from "../userNameForm";

test("calls updateUsername with the new username", async () => {
  const handleUpdateUsername = jest.fn();
  const fakeUsername = "sonicthehedgehog";

  render(<UsernameForm updateUsername={handleUpdateUsername} />);

  const usernameInput = screen.getByLabelText(/username/i);
  user.type(usernameInput, fakeUsername);
  user.click(screen.getByText(/submit/i));

  expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername);
  await waitForElementToBeRemoved(() => screen.queryByText(/saving/i));
});
