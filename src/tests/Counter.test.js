//import necessary react testing library helpers here
//import the Counter component here
import React from "react";
import Counter from "../components/counter";
import {render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId("count").textContent).toBe("0");

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText("+"));
  expect(screen.getByTestId("count").textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(screen.getByText("-"));
  expect(screen.getByTestId("count").textContent).toBe("-1");
});