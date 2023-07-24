import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";


describe("Working navigation links", async () => {

    it("tests for link render", () => {
        render(<App />);
        expect(screen.getAllByRole("link").length).toBe(5);
    })

});