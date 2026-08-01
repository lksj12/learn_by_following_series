import { it, expect } from 'vitest';
// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import Type from "../Type";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

it("displays product images from server", async()=>{
    render(<Type orderType="products"/>);

    const productImages = await screen.findAllByRole("img", {
        name: /product$/i,
    });
    expect(productImages).toHaveLength(4);

    const altText = productImages.map((element)=>element.alt);
    expect(altText).toEqual(["America Product", "England Product", "Germany Product", "Portland Product"])
})

it("fetch option information from server", async()=>{
    render(<Type orderType="options"/>);
    
    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(3);
})

it("when fetching products, face an error", async()=>{
    server.resetHandlers(
        http.get("http://localhost:3000/products", ()=>{
            return HttpResponse.json(null, { status: 500 });
        })
    );

    render(<Type orderType="products"/>);

    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("An unexpected error occurred. Please try again later.");

});
