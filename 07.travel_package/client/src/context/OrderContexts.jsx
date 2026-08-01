import { useState, useMemo, useEffect } from "react";
import OrderContext from "./OrderContext";

const pricePerItem = {
    products: {
        America: 1000,
        England: 2000,
        Germany: 3000,
        Portland: 4000,
    },
    options: {
        Insurance: 500,
        Dinner: 1000,
        FirstClass: 1500,
    },
};

function calculateSubtotal(orderType, orderCounts) {
    let subtotal = 0;

    for (const [itemName, count] of orderCounts[orderType].entries()) {
        subtotal += count * pricePerItem[orderType][itemName];
    }

    return subtotal;
}

export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    });

    const resetOrderData = () => {
            setOrderCounts({
                products: new Map(),
                options: new Map(),
            });
        };

    useEffect(() => {
        const productsTotal = calculateSubtotal("products", orderCounts);
        const optionsTotal = calculateSubtotal("options", orderCounts);
        const total = productsTotal + optionsTotal;
        
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total,
        });
    }, [orderCounts]);

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, orderType) {
            const newOrderCounts = { ...orderCounts };

            const orderCountsMap = orderCounts[orderType];
            orderCountsMap.set(itemName, parseInt(newItemCount));

            setOrderCounts(newOrderCounts);
        }

        return [{ ...orderCounts, totals }, updateItemCount, resetOrderData];
    }, [orderCounts, totals]);
    return <OrderContext.Provider value={value} {...props} />;
}
