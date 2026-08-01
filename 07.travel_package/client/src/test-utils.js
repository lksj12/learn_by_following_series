import { render } from "@testing-library/react";
import { OrderContextProvider } from "./context/OrderContexts";

const customRender = (ui, options) => {
    render(ui, {wrapper: OrderContextProvider, ...options});
}

export * from "@testing-library/react";
export { customRender as render };