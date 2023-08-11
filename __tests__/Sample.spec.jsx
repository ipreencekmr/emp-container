import React from "react";
import { render, screen } from "@testing-library/react";

describe("Sample Test", () => {
    it("should render as expected", () => {
        render(<div data-testid="sampleTestId">Sample Component</div>);
        expect(screen.getByTestId("sampleTestId")).toBeInTheDocument();
    });
});