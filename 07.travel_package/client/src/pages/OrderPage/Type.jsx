import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import OrderContext from "../../context/OrderContext";

export default function Type({ orderType }){
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderData, updateItemCount] = useContext(OrderContext);

    useEffect(() => {
        let ignore = false;

        async function loadItems() {
            try {
                const response = await axios.get(`http://localhost:3000/${orderType}`);
                if (!ignore) {
                    setItems(response.data);
                    setError(false);
                }
            }
            catch {
                if (!ignore) {
                    setError(true);
                }
            }
        }
        loadItems();

        return () => {
            ignore = true;
        };
    }, [orderType]);

    if (error) {
        return <ErrorBanner message="An unexpected error occurred. Please try again later." />
    }

    const ItemComponent = orderType === "products" ? Products : Options;
    const totalLabel = orderType === "products" ? "Product Total" : "Option Total";

    const optionItems = items.map((item) => 
        <ItemComponent
            key={item.name}
            name={item.name}
            description={item.description}
            imagePath={item.imagePath}
            updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, orderType)}
        />
    );

    return(
        <>
            <h2>{totalLabel}: {orderData.totals[orderType]}</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: orderType === "options" && "col"
                }}
            >
                {optionItems}
            </div>
        </>
    )
}
