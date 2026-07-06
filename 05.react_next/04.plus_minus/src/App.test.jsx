import { render, screen } from '@testing-library/react';
import App from './App';
import { userEvent } from '@testing-library/user-event';

test('the counter starts at 0', () => {
    render(<App />);

    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("0");
});

test("the minus button has a minus sign", () => {
    render(<App />);

    const minusButton = screen.getByTestId("minus-button");
    expect(minusButton).toHaveTextContent("-");
});

test("the plus button has a plus sign", () => {
    render(<App />);

    const plusButton = screen.getByTestId("plus-button");
    expect(plusButton).toHaveTextContent("+");
});

test("When the + button is clicked, the counter increments by 1", async () =>{
    const user = userEvent.setup();
    
    render(<App />);
    const plusButton = screen.getByTestId("plus-button");
    await user.click(plusButton);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("1");
})

test("When the - button is clicked, the counter decrements by 1", async () =>{
    const user = userEvent.setup();
    
    render(<App />);
    const minusButton = screen.getByTestId("minus-button");
    await user.click(minusButton);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("-1");
})

test("on/off button has blue color", () => {
    render(<App />);
    const onOffButton = screen.getByTestId("on_off-button");
    expect(onOffButton).toHaveStyle({backgroundColor: "rgb(0, 0, 255)"});
})

test ("Prevent the + and - buttons from being pressed when the on/off button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const onOffButton = screen.getByTestId("on_off-button");
    const plusButton = screen.getByTestId("plus-button");
    const minusButton = screen.getByTestId("minus-button");

    await user.click(onOffButton);
    expect(plusButton).toBeDisabled();
    expect(minusButton).toBeDisabled();
})