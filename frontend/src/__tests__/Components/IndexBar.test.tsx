/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IndexBar from "../../Components/IndexBar/IndexBar";
import lang from "../../lib/lang/en";
import "@testing-library/jest-dom/extend-expect";

test("Should Render Toolbar", () => {
  // Arrange
  let index = 0;
  const maxIndex = 11;

  const handleChange = (number: number) => {
    index = number;
  };

  render(
    <IndexBar
      currentIndex={index}
      maxIndex={maxIndex}
      handleChange={handleChange}
    />
  );

  expect(screen.getByText(lang.commonNextPage)).toBeInTheDocument();
  expect(screen.getByText(lang.commonPreviousPage)).toBeInTheDocument();
  expect(screen.getByText("6")).toBeInTheDocument();
  expect(screen.queryByText("7")).toBeNull();
});

test("Should Click on Toolbar", () => {
  // Arrange
  let index = 0;
  const maxIndex = 11;

  const handleChange = (number: number) => {
    index = number;
  };

  render(
    <IndexBar
      currentIndex={index}
      maxIndex={maxIndex}
      handleChange={handleChange}
    />
  );

  const nextPage = screen.getByText(lang.commonNextPage);
  const page_three = screen.getByText("3");

  fireEvent.click(page_three);
  expect(index).toEqual(4);

  // Since index is not updated in the component, it will default to zero when set again.
  // That means next page should go from 0 to 2.
  fireEvent.click(nextPage);
  expect(index).toEqual(2);
});
