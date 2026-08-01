import { useState, useContext } from "react"
import OrderContext from "../../context/OrderContext";

export default function SummaryPage({ setStep }) {
    const [checked, setChecked] = useState(false);
    const [orderData] = useContext(OrderContext);
    
    const productArray = Array.from(orderData.products);
    const productList = productArray.map(([key, value]) => (
        <li key={key}>
            {key}: {value}
        </li>
    ));

    const hasOption = orderData.options.size > 0;
    let optionRender = null;

    if(hasOption){
        const optionArray = Array.from(orderData.options.keys());
        const optionList = optionArray.map((key) => (
            <li key={key}>
                {key}
            </li>
        ));

        optionRender = (
            <>
                <h2>Options: {orderData.totals.options}</h2>
                <ul>
                    {optionList}
                </ul>
            </>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    }

    return(
        <>
            <h1>Order Summary</h1>
            <h2>Products: {orderData.totals.products}</h2>
            <ul>{productList}</ul>
            {optionRender}

            <form onSubmit={handleSubmit}>
                <input
                    type="checkbox"
                    checked = {checked}
                    onChange={(e)=>{setChecked(e.target.checked)}}
                    id="confirm-checkbox"
                />
                <label htmlFor="confirm-checkbox">I agree to Terms and Conditions</label>
                <br/>
                <button disabled={!checked} type="submit">
                    Confirm Order
                </button>
            </form>
        </>
    )
}
