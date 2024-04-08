import React from "react";
// import Button from 'react-bootstrap/Button';Button
import {Container, Table} from "react-bootstrap";
import ProductTable from "../../component/ProductTable.tsx";



import {GetAllProduct} from "../../../data/product/ProductData.type.ts";
import * as ProductApi from "../../../api/ProductApi.ts"
import LoadingContainer from "../../component/LoadingContainer.tsx";


type Props = {}

type State = {
    getAllProductDataList: GetAllProduct[] | undefined;
}

export default class ProductPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            getAllProductDataList: undefined
        }
    }

    handleGetAllProductData =(responseData:GetAllProduct[]) =>{
       this.setState({
           getAllProductDataList:responseData
       })

    }

    componentDidMount() {
       ProductApi.getAllProduct(this.handleGetAllProductData);
    }

    render() {
        return (
            <Container>
                <h1>All Products</h1>
                {
                    this.state.getAllProductDataList
                        ?<ProductTable getAllProductDataList={this.state.getAllProductDataList!}/>
                        :<LoadingContainer/>
                }

            </Container>
        );
    }
}