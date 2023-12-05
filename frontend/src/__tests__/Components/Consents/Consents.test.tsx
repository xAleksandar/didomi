/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { mockedUsers } from "../../../mocks/mocks";
import ConsentsTable from "../../../Components/ConsentsTable/ConsentsTable";
import lang from "../../../lib/lang/en";
import "@testing-library/jest-dom/extend-expect";

test("renders ConsentsTable component with mocked data", () => {
  // Arrange
  const index = 0;
  render(<ConsentsTable data={mockedUsers.slice(index, index + 2)} />);

  // Assert
  expect(screen.getByText(lang.commonName)).toBeInTheDocument();
  expect(screen.getByText(lang.commonEmail)).toBeInTheDocument();
  expect(screen.getByText(mockedUsers[1].email)).toBeInTheDocument();
  expect(screen.getByText(mockedUsers[1].email)).toBeInTheDocument();
  expect(screen.getByText(mockedUsers[1].name)).toBeInTheDocument();
  expect(
    screen.getByText(mockedUsers[1].consents.join(", "))
  ).toBeInTheDocument();
});
