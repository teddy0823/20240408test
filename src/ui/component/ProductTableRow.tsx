import React from "react";
import {GetAllProduct} from "../../data/product/ProductData.type.ts";


type Props ={
    getAllProductData:GetAllProduct;
}

export default function ProductTableRow({getAllProductData}:Props){
    return (
        <tr>
            <td>
                <img
                    src={getAllProductData.imageUrl}
                    height="200px"
                />
            </td>
            <td>{getAllProductData.pid}</td>
            <td>{getAllProductData.name}</td>
            <td>{getAllProductData.price}</td>
            <td>{getAllProductData.stock}</td>
        </tr>

    );
}