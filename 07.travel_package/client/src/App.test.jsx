import { it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("From order to order completion", async()=>{
    render(<App/>);
    
    // 1. OrderPage
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America"
    });

    await userEvent.clear(americaInput);
    await userEvent.type(americaInput, "2");

    const englandInput = await screen.findByRole("spinbutton", {
        name: "England"
    });

    await userEvent.clear(englandInput);
    await userEvent.type(englandInput, "3");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance"
    });
    
    await userEvent.click(insuranceCheckbox);

    const orderButton = await screen.findByRole("button", {
        name: "Place Order"
    });

    await userEvent.click(orderButton);

    // 2. OrderConfirmationPage
    const summaryHeading = await screen.findByRole("heading", {
        name: "Order Summary"
    });
    expect(summaryHeading).toBeInTheDocument();

    const prodcutHeading = await screen.findByRole("heading", {
        name: "Products: 8000"
    });
    expect(prodcutHeading).toBeInTheDocument();

    const optionHeading = await screen.findByRole("heading", {
        name: "Options: 500"
    });
    expect(optionHeading).toBeInTheDocument();

    expect(screen.getByText("America: 2")).toBeInTheDocument();
    expect(screen.getByText("England: 3")).toBeInTheDocument();
    expect(screen.getByText("Insurance")).toBeInTheDocument();

    const confirmCheckbox = await screen.findByRole("checkbox", {
        name: "I agree to Terms and Conditions"
    });
    await userEvent.click(confirmCheckbox);

    const confirmButton = await screen.findByRole("button", {
        name: "Confirm Order"
    });

    await userEvent.click(confirmButton);

    // 3. OrderCompletion Page
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const completeHeader = await screen.findByRole("heading", {
        name: "Order Complete!!",
    });
    expect(completeHeader).toBeInTheDocument();

    const loadingDisapeared = screen.queryByText("loading");
    expect(loadingDisapeared).not.toBeInTheDocument();

    // 첫페이지로 버튼 클릭
    const firstPageButton = screen.getByRole("button", {
        name: "Go to Homepage"
    });
    await userEvent.click(firstPageButton);

    const hompageText = screen.getByRole("heading", { name: "Travel Package Order" })
    expect(hompageText).toBeInTheDocument();
    
    const productTotal = screen.getByRole("heading", { name: "Product Total: 0" })
    expect(productTotal).toBeInTheDocument();

    const optionTotal = screen.getByRole("heading", { name: "Option Total: 0" })
    expect(optionTotal).toBeInTheDocument();
});
