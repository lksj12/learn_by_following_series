import Type from "./Type";
import OrderContext from "../../context/OrderContext";
import { useContext } from "react";

export default function OrderPage({ setStep }) {
    const [orderData] = useContext(OrderContext);

    return(
        <>
            <h1>Travel Package Order</h1>
            <div>
                <Type orderType="products" />
            </div>
            <div style={{ display: "flex", marginTop: 20}} >
                <div style = {{ width: "50%"}}>
                    <Type orderType="options" />
                </div>
                <div style = {{ width: "50%"}}>
                    <h2>Total Price: {orderData.totals.total}</h2><br/>
                    <button onClick={() => setStep(1)}>Place Order</button>
                </div>
            </div>
        </>
    )
}
