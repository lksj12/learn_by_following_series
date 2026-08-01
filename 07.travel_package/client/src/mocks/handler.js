import { http, HttpResponse, delay } from "msw";

export const handlers = [
    http.get("http://localhost:3000/products", ()=>{
        return HttpResponse.json([
            {
                "name": "America",
                "imagePath": "/images/america.png"
            },
            {
                "name": "England",
                "imagePath": "/images/england.png"
            },
            {
                "name": "Germany",
                "imagePath": "/images/germany.png"
            },
            {
                "name": "Portland",
                "imagePath": "/images/portland.png"
            },
        ])
    }),

    http.get("http://localhost:3000/options", ()=>{
        return HttpResponse.json([
            {
                "name": "Insurance",
            },
            {
                "name": "Dinner",
            },
            {
                "name": "FirstClass",
            },
        ])
    }),

    http.post("http://localhost:3000/order", async () => {
        await delay(100);
        const dummyData = [
            {
                orderNumber: 123455676,
                price: 2000,
            },
        ];

        return HttpResponse.json(dummyData);
    }),
]
