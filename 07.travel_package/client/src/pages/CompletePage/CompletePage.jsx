import axios from "axios";
import { useEffect, useState, useContext } from "react";
import OrderContext from "../../context/OrderContext";
import ErrorBanner from "../../components/ErrorBanner";

export default function CompletePage({ setStep }) {
    const [orderData, , resetOrderData] = useContext(OrderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function orderCompleted() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/order",
                    orderData
                );
                setOrderHistory(response.data);
                setLoading(false);
            }
            catch {
                setError(true);
                setLoading(false);
            }
        }
        orderCompleted();
    }, [orderData]);

    if (error) {
        return <ErrorBanner message="Error!"/>
    }

    const orderTable = orderHistory.map((item) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.price}</td>
        </tr>
    ));

    if (loading) {
        return <div>loading...</div>;
    }

    const handleClick = () => {
        resetOrderData();
        setStep(0);
    };

    return <div style={{ textAlign: "center"}}>
        <h2>Order Complete!!</h2>
        <h3>Order History</h3>
        <table style={{ margin: "auto"}}>
            <tbody>
                <tr>
                    <th>Order Number</th>
                    <th>Order Price</th>
                </tr>
                {orderTable}
            </tbody>
        </table>
        <button onClick={handleClick}>Go to Homepage</button>
    </div>;
}
