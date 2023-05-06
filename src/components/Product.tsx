import { useState } from "react"
import { IProduct } from "../models/IProduct"

interface ProductProps {
    product: IProduct
}


export function Product({ product }: ProductProps) {
    const [ showedDetails, setShowedDetails   ] = useState(false);
    const buttonColor = showedDetails ? 'bg-blue-400' : 'bg-yellow-400';
    const buttonClass = 'py-2 px-4 border ' + buttonColor;

    return (
        <div>
            Product {product.id}: 
            Title: {product.title}
            <img src={product.image} className="w-1/6" ></img>
            <button
                className={buttonClass}
                onClick={() => setShowedDetails(! showedDetails)}
            >
                { showedDetails ? 'Hide details' : 'More details' } 
            </button>

            <div>
                {showedDetails && <div>
                    <p>{product.description}</p>
                     <p>Rate: <span className="font-bold">{product?.rating?.rate}</span></p>
                </div>}
            </div>
        </div>
    )
}