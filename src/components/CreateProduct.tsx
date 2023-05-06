import { useState } from "react";
import { IProduct } from "../models/IProduct";
import axios from "axios";

let productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProp {
    onCreate: (newProduct: IProduct) => void
}

function addProduct(product: IProduct) {
    return axios.post<IProduct>(process.env.REACT_APP_PRODUCTS_URL as string, product);
}

export function CreateProduct ({ onCreate }: CreateProductProp) {
    const [newProductName, setNewProductName] = useState<string>('');

    async function submitCreateProduct(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        productData.title = newProductName;
        const response = await addProduct(productData);
        const newProduct: IProduct = response.data;
        onCreate(newProduct);
    }

    return (
        <div>
            <form onSubmit={submitCreateProduct}>
                <input
                    type="text"
                    placeholder="Enter product title"
                    className="border p-2 m-2 w-full focus:outline-none"
                    value={newProductName}
                    onChange={(event) => setNewProductName(event.target.value)}
                />
                <button type="submit" className="py-2 px-4 border bg-yellow-400">Add Product</button>
            </form>
        </div>
    )
}