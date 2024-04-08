import axios from "axios";
import {GetAllProduct} from "../data/product/ProductData.type.ts";
import ProductPage from "../ui/page/ProductPage/ProductPage.tsx";

export const getAllProduct = (handleGetAllProductData:(responseData:GetAllProduct[])=>void):void=>{
    let responseData:GetAllProduct[];
    axios.get<GetAllProduct[]>("http://localhost:8080/public/product")
        .then((response) =>{
            handleGetAllProductData(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
}