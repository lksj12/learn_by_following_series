import { it, expect, describe } from 'vitest';
// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import Type from "../Type";
import userEvent from "@testing-library/user-event";
import OrderPage from "../OrderPage";

it("update product's total when products change", async()=>{
    const user = userEvent.setup();
    render(<Type orderType="products"/>);

    const productsTotal = screen.getByText("Product Total:", { exact: false });
    expect(productsTotal).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton",{
        name: "America"
    });
    
    await user.clear(americaInput);
    await user.type(americaInput, "1");

    expect(productsTotal).toHaveTextContent("1000");

    const englandInput = await screen.findByRole("spinbutton",{
        name: "England"
    });

    await user.clear(englandInput);
    await user.type(englandInput, "3");

    expect(productsTotal).toHaveTextContent("7000");

    const germanyInput = await screen.findByRole("spinbutton",{
        name: "Germany"
    });

    await user.clear(germanyInput);
    await user.type(germanyInput, "2");

    expect(productsTotal).toHaveTextContent("13000");

    const portlandInput = await screen.findByRole("spinbutton",{
        name: "Portland"
    });
    
    await user.clear(portlandInput);
    await user.type(portlandInput, "1");

    expect(productsTotal).toHaveTextContent("17000");
})

it("update option's total when options change", async()=>{
    render(<Type orderType="options"/>);

    const optionsTotal = screen.getByText("Option Total:", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance"
    });

    await userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner"
    });

    await userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1500");

    await userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");
})

describe("total price of goods and options", ()=>{
    it("total price starts with 0 and updating when adding one product", async()=>{
        render(<OrderPage/>);

        const total = screen.getByText("Total Price:", { exact: false });
        expect(total).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton",{
            name: "America"
        });

        await userEvent.clear(americaInput);
        await userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1000");
    });

    it("updating total pridce when adding one option", async() => {
        render(<OrderPage/>);

        const total = screen.getByText("Total Price:", { exact: false });
        
        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance"
        });

        await userEvent.click(insuranceCheckbox);
        expect(total).toHaveTextContent("500");
    });

    it("updating total price when removing option and product", async() => {
        render(<OrderPage/>);

        const total = screen.getByText("Total Price:", { exact: false });

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance"
        });

        await userEvent.click(insuranceCheckbox);
        
        const americaInput = await screen.findByRole("spinbutton",{
            name: "America"
        });

        await userEvent.clear(americaInput);
        await userEvent.type(americaInput, "3");

        expect(total).toHaveTextContent("3500");
    });
})
