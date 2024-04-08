import {Table} from "react-bootstrap";
import React from "react";
import ProductTableRow from "./ProductTableRow.tsx";
import {GetAllProduct} from "../../data/product/ProductData.type.ts";

type Props ={
    getAllProductDataList:GetAllProduct[]
}

export default function ProductTable({getAllProductDataList}:Props){

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Image</th>
                <th>pid</th>
                <th>Name</th>
                <th>Price</th>
                <th>hasStock</th>
            </tr>
            </thead>
            <tbody>

            {
                getAllProductDataList.map((value)=>(
                    <ProductTableRow key={value.pid} getAllProductData={value}/>
                ))
            }
            </tbody>

        </Table>
    );

}