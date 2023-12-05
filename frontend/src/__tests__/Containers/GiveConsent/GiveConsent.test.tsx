/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import GiveConsent from "../../../Containers/GiveConsent/GiveConsent";
import lang from "../../../lib/lang/en";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/extend-expect";

test("renders GiveConsent Screen", () => {
  // Arrange
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GiveConsent />
      </QueryClientProvider>
    </BrowserRouter>
  );

  // Assert
  expect(screen.getByText(`${lang.commonAggreement}:`)).toBeInTheDocument();
  expect(screen.getByText(lang.receiveNewsletter)).toBeInTheDocument();
  expect(screen.getByText(lang.commonGiveConsent)).toBeInTheDocument();
});
