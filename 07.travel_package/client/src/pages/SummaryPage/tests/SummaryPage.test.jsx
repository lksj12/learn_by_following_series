import { it, expect } from 'vitest';
// import { render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";
import { render, screen } from "../../../test-utils";

it("checkbox and button", ()=>{
    render(<SummaryPage />);
    const checkbox = screen.getByRole("checkbox", {
        name: "I agree to Terms and Conditions",
    });
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", {name: "Confirm Order"});
    expect(confirmButton.disabled).toBeTruthy();
})